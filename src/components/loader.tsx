import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { HashLoader } from "react-spinners";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionLoading = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col items-center justify-center h-[30svh] text-black">
        <HashLoader color="#ffd700" />
        <p className="mt-3 text-center">Entering raffle, please wait</p>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionLoading;
