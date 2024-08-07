"use client";

import { contractAbi, contractAddress } from "@/contract";
import React, { useEffect, useState } from "react";
import { formatUnits, parseEther, parseUnits, zeroAddress } from "viem";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  BaseError,
} from "wagmi";
import { Button } from "./ui/button";
import { toast } from "sonner";
import TransactionLoading from "./loader";
import { Input } from "./ui/input";
import TransactionSuccess from "./successModal";

const Trading = () => {
  const [value, setValue] = useState<string | undefined>("");
  const [loadingTx, setLoadingTx] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [winningPercent, setWinningPercent] = useState(0);
  const { address } = useAccount();

  const { writeContractAsync, data } = useWriteContract();
  const { data: entryFee, refetch: refetchEntryFee } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getEntryFee",
  });
  const { data: raffleState, refetch: refetchRaffleState } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getRaffleState",
  });
  const { data: raffleWinner, refetch: refetchRaffleWinner } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getWinner",
  });
  const { data: rafflePlayers, refetch: refetchRafflePlayers } =
    useReadContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "getPlayers",
    });
  const { data: raffleInterval, refetch: refetchRaffleInterval } =
    useReadContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: "getInterval",
    });
  const { data: timeElapsed, refetch: refetchTimeElapsed } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getInterval",
  });

  const handleBuyTicket = async () => {
    setLoadingTx(true);
    setTransactionSuccess(false);

    const amount = Number(entryFee ?? 0) * Number(value!!);
    writeContractAsync(
      {
        abi: contractAbi,
        address: contractAddress,
        functionName: "enterRaffleMultipleTimes",
        args: [value],
        value: BigInt(amount),
      },
      {
        onSuccess(data, variables, context) {
          setLoadingTx(false);
          setTransactionSuccess(true);
          refetchRafflePlayers();
          console.log({ dataFromSucess: data });
        },
        onError(error) {
          setLoadingTx(false);
          toast.error((error as BaseError)?.shortMessage, {
            duration: 7000,
            position: "top-center",
          });
          console.log(error);
          setTransactionSuccess(false);
        },
      }
    );
  };

  useEffect(() => {
    if (value && Array.isArray(rafflePlayers)) {
      const totalEntries = rafflePlayers.length;
      const yourEntries = Number(value);
      const winningPercent = (yourEntries / 10000) * 100;
      setWinningPercent(winningPercent);
    }
  }, [value, rafflePlayers]);

  useEffect(() => {
    refetchEntryFee();
    // refetchRaffleInterval()
    refetchRafflePlayers();
    refetchRaffleState();
    refetchRaffleWinner();
    // refetchTimeElapsed();
  }, [address]);
  //   useEffect(() => {
  //     console.log({ raffleInterval });
  //     let intervalT: NodeJS.Timeout | undefined;
  //     if (raffleInterval) {
  //       const intervalNum = Number(raffleInterval); // Assuming interval is the end time in epoch seconds
  //       const last = Number(timeElapsed); // in seconds
  //       const endTime = intervalNum + last; // in seconds

  //       const calculateRemainingTime = () => {
  //         const currentTime = Math.floor(new Date().getTime() / 1000); // Current timestamp in milliseconds
  //         const remainingTime = endTime - currentTime;
  //         console.log({ endTime, remainingTime });
  //         return remainingTime > 0 ? remainingTime : 0;
  //       };

  //       // Set up the countdown interval
  //       intervalT = setInterval(() => {
  //         const remainingTimeM = calculateRemainingTime();
  //         setRemainingTime(remainingTimeM);
  //       }, 1000);

  //       // Check immediately without waiting for the first interval
  //       setRemainingTime(calculateRemainingTime());
  //     }

  //     // Clean up the interval on component unmount
  //     return () => {
  //       if (intervalT) clearInterval(intervalT);
  //     };
  //   }, [raffleInterval]);

  return (
    <section className="mt-24 text-white text-center container mx-auto">
      <p className="text-[#ffd700] text-6xl font-bold my-5">Trading Center</p>
      <p>GenesisPugs #101</p>
      <p className="text-2xl text-primary font-semibold">
        Raffle State : {Number(raffleState) === 0 ? "Open" : "Closed"}
      </p>
      <div className=" border border-[#ffd700] rounded-2xl p-5 lg:p-10 flex flex-col lg:flex-row gap-5 lg:items-center mt-8">
        <img
          src="/assets/images/101.png"
          alt=""
          className="w-full max-w-[400px] max-h-[400px] object-contain mx-auto rounded-lg"
        />
        <article className="flex flex-col gap-6 w-full text-sm">
          <div className="flex justify-between gap-2">
            <p>cost:</p>
            <p>{formatUnits((entryFee as bigint) ?? 0, 18)} ETH</p>
          </div>
          <hr className="border-[#ffd700] " />
          <div className="flex justify-between gap-2">
            <p>Your Entries:</p>
            <div className="flex items-center gap-2">
              <Input
                value={value}
                onChange={(e) => {
                  const value = e.target.value;
                  // Check if the value is either empty, a single decimal point, or a valid number (integer or decimal)
                  if (value === "" || /^[0-9]+\.?([0-9]+)?$/.test(value)) {
                    // Directly pass the value without converting it to Number
                    if (Number(value) >= 100) {
                      setValue("100");
                    } else {
                      setValue(value);
                    }
                  }
                }}
                className="w-[50px] text-black focus:border-0 focus-within:outline-0 focus-within:ring-0 focus-within:border-0"
              />
              <p>/100</p>
            </div>
          </div>
          <hr className="border-[#ffd700] " />
          <div className="flex justify-between gap-2">
            <p>Total Entries Sold:</p>
            <p>
              {Array.isArray(rafflePlayers) ? rafflePlayers.length : 0} / 10000
            </p>
          </div>
          <hr className="border-[#ffd700] " />
          <div className="flex justify-between gap-2">
            <p>Your chance of winning:</p>
            <p>{winningPercent}%</p>
          </div>
          <hr className="border-[#ffd700] " />
          <div className="flex justify-between gap-2">
            <p>Winner:</p>
            {raffleWinner && raffleWinner !== zeroAddress ? (
              <p>{(raffleWinner as string).substring(0, 20) + "..."}</p>
            ) : (
              <p>Not yet determined</p>
            )}
          </div>
          <hr className="border-[#ffd700] " />

          {address ? (
            <Button
              onClick={handleBuyTicket}
              className="text-black py-2 px-4 rounded-lg"
            >
              Buy
            </Button>
          ) : (
            <div className="flex items-center justify-center">
              <w3m-button />
            </div>
          )}
        </article>
      </div>
      <TransactionLoading open={loadingTx} setOpen={setLoadingTx} />
      <TransactionSuccess
        open={transactionSuccess}
        setOpen={setTransactionSuccess}
        hash={data!!}
      />
    </section>
  );
};

export default Trading;
