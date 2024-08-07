import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { GridLoader, HashLoader } from "react-spinners";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hash: `0x${string}`;
};

const TransactionSuccess = ({ open, setOpen, hash }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col items-center justify-center h-[30svh] text-black">
        <GridLoader color="#ffd700" />
        <p className="mt-3 text-center">
          Raffle ticket bought successfully. You can check out the transaction
          on the blockchain
        </p>
        <div className="mt-2">
          <Link
            href={`https://sepolia.blastexplorer.io/tx/${hash}`}
            target="_blank"
          >
            <Button>Visit Explorer</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionSuccess;
