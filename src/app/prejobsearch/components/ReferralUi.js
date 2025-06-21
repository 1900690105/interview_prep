"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clipboard, Check, Linkedin, Mail } from "lucide-react";

const ReferralUI = ({ ref }) => {
  const [copied, setCopied] = useState({
    linkedin: false,
    email: false,
  });
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = async (type, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [type]: true }));
      setCopyMessage(
        `${
          type.charAt(0).toUpperCase() + type.slice(1)
        } content copied to clipboard.`
      );
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [type]: false }));
        setCopyMessage("");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Live region for screen readers */}
      <p className="sr-only" role="status" aria-live="polite">
        {copyMessage}
      </p>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Referral Message Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="linkedin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8" role="tablist">
              <TabsTrigger value="linkedin" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn Message
              </TabsTrigger>
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email Template
              </TabsTrigger>
            </TabsList>

            {["linkedin", "email"].map((type) => (
              <TabsContent key={type} value={type}>
                <div className="space-y-6">
                  {/* Subject */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Subject</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleCopy(type, ref[`${type}_message`].subject)
                        }
                        aria-label={`Copy ${type} subject line`}
                        className="flex items-center gap-2"
                      >
                        {copied[type] ? (
                          <Check className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Clipboard className="w-4 h-4" aria-hidden="true" />
                        )}
                        {copied[type] ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                      {ref[`${type}_message`]?.subject}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Message Body</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleCopy(type, ref[`${type}_message`].body)
                        }
                        aria-label={`Copy ${type} message body`}
                        className="flex items-center gap-2"
                      >
                        {copied[type] ? (
                          <Check className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Clipboard className="w-4 h-4" aria-hidden="true" />
                        )}
                        {copied[type] ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 whitespace-pre-wrap">
                      {ref[`${type}_message`].body}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralUI;
