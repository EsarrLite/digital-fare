"use client";

import { useDispatch } from "react-redux";
import { searchStudent } from "@/data/DataSlice";
import CurvedInput from "@/components/CurvedInput";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ElasticMesh from "@/components/ElasticMesh";


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
      <main className="flex w-full flex-1 max-w-3xl flex-col items-center justify-center py-10 px-9 sm:px-6 md:px-10 bg-black dark:bg-black sm:items-start">
        <div style={{ width: '35%', height: '100px', position: 'relative'}}>
          <ElasticMesh
            text="UM-1"
            material="balloon"
            color="#a855f7"
            inflate={2}
            stiffness={0.5}
            wobble={0.6}
            theme="dark"
            style={{
              marginTop: '-200px',
            }}
          />
        </div>
        <div style={{ width: '90%', height: '100px', position: 'relative'}}>
          <ElasticMesh
            text="Farewell"
            material="balloon"
            color="#a855f7"
            inflate={2}
            stiffness={0.5}
            wobble={0.6}
            theme="dark"
            style={{
              marginTop: '-250px',
            }}
          />
        </div>
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          animationSpeed={8}
          variant="linear"
          glow={0}
          style={{
            fontSize: "clamp(20px, 5vw, 35px)",
            fontWeight: "bold",
            marginTop: '-40%'
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
            fontSize: "clamp(32px, 7.5vw, 63px)",
            fontWeight: "bold",
            marginBottom: "4rem",
          }}
        >
          "Roll Number"
        </GradientText>
        <CurvedInput
          placeholder="Roll N.o.?"
          buttonText="Get Started"
          theme="dark"
          bend={28}
          height={65}
          width={400}
          onSubmit={handleSubmit}
          style={{
            marginBottom: "-150px",
            fontSize: "clamp(32px, 7.5vw, 63px)"
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
