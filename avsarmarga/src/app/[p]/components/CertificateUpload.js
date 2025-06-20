import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, FileCheck2, X, AlertCircle } from "lucide-react";

const CertificateUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const allowedTypes = [
      "application/x-pem-file",
      "application/x-x509-ca-cert",
    ];
    const allowedExtensions = [
      ".pem",
      ".crt",
      ".cer",
      ".png",
      ".jpg",
      ".jpeg",
      ".ico",
      ".pdf",
      ".docs",
    ];

    if (file) {
      const fileExtension = "." + file.name.split(".").pop().toLowerCase();

      if (
        allowedTypes.includes(file.type) ||
        allowedExtensions.includes(fileExtension)
      ) {
        setSelectedFile(file);
        setUploadError("");
      } else {
        setUploadError(
          "Invalid file type. Please upload a valid certificate file."
        );
        event.target.value = null;
      }
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setUploadError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement actual upload logic here
      alert("File uploaded successfully!");
      console.log("Uploading file:", selectedFile);
      window.location.href = "/params/page?page=SoftSkill";
    } else {
      setUploadError("Please select a certificate file first.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-2xl rounded-2xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center mb-6 space-x-4">
        <FileText className="w-10 h-10 text-blue-600 bg-blue-50 rounded-full p-2" />
        <h2 className="text-2xl font-bold text-gray-800">Upload Certificate</h2>
      </div>

      <div
        className={`
          border-2 border-dashed rounded-xl p-6 mb-6 text-center transition-all duration-300
          ${
            selectedFile
              ? "border-green-300 bg-green-50"
              : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
          }
        `}
      >
        <input
          ref={fileInputRef}
          id="certificate-upload"
          type="file"
          accept=".pem,.crt,.cer"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="certificate-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          {selectedFile ? (
            <>
              <FileCheck2 className="w-12 h-12 text-green-600 mb-4" />
              <p className="text-green-700 font-semibold">
                {selectedFile.name}
              </p>
            </>
          ) : (
            <>
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600">
                Drag and drop or{" "}
                <span className="text-blue-600 font-semibold">Browse</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: .pem, .crt, .cer
              </p>
            </>
          )}
        </label>

        {selectedFile && (
          <button
            onClick={handleFileRemove}
            className="mt-4 text-red-500 hover:text-red-700 flex items-center mx-auto"
          >
            <X className="mr-2" /> Remove File
          </button>
        )}
      </div>

      {uploadError && (
        <div className="flex items-center bg-red-50 p-3 rounded-lg mb-4">
          <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
          <p className="text-red-700 text-sm">{uploadError}</p>
        </div>
      )}

      <Button
        onClick={() => {
          handleUpload();
        }}
        disabled={!selectedFile}
        className="
          w-full py-3 
          bg-blue-600 hover:bg-blue-700 
          text-white font-bold 
          rounded-xl 
          transition-all duration-300 
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Upload Certificate
      </Button>
    </div>
  );
};

export default CertificateUpload;
