"use client";

import { useDispatch } from "react-redux";
import { searchStudent } from "@/data/DataSlice";
import CurvedInput from "@/components/CurvedInput";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [rnNo, setRnNo] = useState(false)

  const handleSubmit = (value: string) => {
    const rollNumber = value.trim();

    if (rollNumber == '') {
      setRnNo(true);
    }

    if (!rollNumber) return;

    dispatch(searchStudent(rollNumber));
    router.push("/verify");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-black dark:bg-black sm:items-start">
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          animationSpeed={8}
          variant="linear"
          glow={0}
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Enter your
          <AutoAwesomeIcon style={{
            marginLeft: '10px',
            width: '50px',
            height: '50px',
            color: 'white'
          }}></AutoAwesomeIcon>
        </GradientText>
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          animationSpeed={8}
          variant="linear"
          glow={0}
          style={{
            fontSize: "2.7rem",
            fontWeight: "bold",
            marginBottom: "4rem",
          }}
        >
          "Roll Number"
        </GradientText>
        <CurvedInput
          placeholder="Roll Number?"
          buttonText="Get Started"
          theme="dark"
          bend={28}
          height={64}
          width={450}
          onSubmit={handleSubmit}
          style={{
            marginBottom: "-150px",
          }}
        />
        {rnNo && (
          <h1 style={{
            fontSize: '15px',
            color: "#FF4444",
          }}>Enter your roll number to continue!</h1>
        )}
      </main>
    </div>
  );
}
