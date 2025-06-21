"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import QuestionLoader from "./Loader";
function LoadingDialog({ loading }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
          <AlertDialogTitle></AlertDialogTitle>
          <QuestionLoader />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default LoadingDialog;
