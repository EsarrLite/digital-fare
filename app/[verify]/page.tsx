'use client';

import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {studentsRN} from "@/data/studentsRN"
import GradientText from "@/components/GradientText";
import CheckIcon from '@mui/icons-material/Check';
import BadgeIcon from '@mui/icons-material/Badge';
import Grainient from "@/components/Grainient";
import SpotlightCard from "@/components/SpotLightCard";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toPng } from "html-to-image";
import DownloadIcon from '@mui/icons-material/Download';

export default function VerifyPage() {

  const router = useRouter()

  const students = useSelector((state: any) => state.students)
  const rn = students[students.length - 1]

  const student = studentsRN.find(
    (s) => s.rno === Number(rn)
  )

  const cardRef = useRef<HTMLDivElement>(null);

  
  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = "student-card.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to download PNG:", error);
    }
  };

  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-5 bg-black dark:bg-black sm:items-start">
        {
          student ? (
            <div className="flex flex-col justify-center items-center">
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
                Your Ticket
              </GradientText>
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B497CF"]}
                animationSpeed={8}
                variant="linear"
                glow={0}
                style={{
                  fontSize: "2.7rem",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                "Is Here"
              </GradientText>
              <div ref={cardRef}>
              <SpotlightCard
                theme="dark"
                spotlightColor="#a855f7"
                intensity={0.6}
                spotlightSize={240}
                softness={0.7}
                shape="circle"
                borderGlow={1}
                proximity={80}
                smoothing={1}
                grain={1}
                ambient
                flare
                style={{
                  color:'white'
                }}
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <h1 style={{
                    fontSize:'20px',
                    marginBottom:'6px',
                    fontWeight: 'bold',
                  }}>{student.name}</h1>
                  <AutoAwesomeIcon></AutoAwesomeIcon>
                </div>
                <p style={{
                  marginBottom: '15px'
                }}>Roll number : {student.rno}</p>
                <hr style={{
                  marginBottom: '27px'
                }} />
                <div className="flex flex-row justify-center items-center gap-6 mb-7">
                  <div className="flex-1">
                    <p className="font-bold">Day</p>
                    <p>14</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Month</p>
                    <p>11, Nov</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Year</p>
                    <p>2026</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-start gap-0 mb-7">
                  <div className="flex-1">
                    <p className="font-bold">Time</p>
                    <p>2-6pm</p>
                  </div>
                  <div className="flex-2">
                    <p className="font-bold">Location</p>
                    <a 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-purple-200" href="https://maps.app.goo.gl/DWyqRdc5gqGZQuCc7"
                    >
                      La Pyae Wun Plaza, Grace Center, Yangon
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-0">
                  <div className="flex-1 mb-3">
                    <p className="font-bold">Package</p>
                  </div>
                  <div className="flex-2">
                    <img style={{
                      width: '400px',
                      height: '70px',
                      opacity: '1',
                      borderRadius: '20px',
                      backgroundBlendMode: 'overlay',
                      border: '0.5px solid black'
                    }} src={
                      student.package === 'gold' ? 
                      "/gold-texture-photo.jpg" : 
                      "/silver-texture-photo.jpg"
                    } alt={
                      student.package === 'gold' ?
                      "gold" : 
                      "silver"
                    } /> 
                  </div>
                </div>
              </SpotlightCard>
              </div>
              <button 
                onClick={handleDownload} 
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  width: '200px',
                  height: '50px',
                  borderRadius: '15px',
                  border: '1px solid black',
                  backgroundColor: 'rgba(132, 94, 194, 0.3)',
                  fontSize: '16px',
                  letterSpacing: '1px',
                  marginTop: '30px',
                }}>
                  <DownloadIcon></DownloadIcon> Download Ticket 
              </button>
            </div>
          ) : (
            <div className="flex-col flex justify-center items-center justify-self-center">
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
                Student
                <CancelIcon style={{
                  marginLeft: '10px',
                  width: '50px',
                  height: '50px',
                  color: "#E61E1E"
                }}></CancelIcon>
              </GradientText>
              <GradientText
                colors={["#5227FF", "#FF9FFC", "#B497CF"]}
                animationSpeed={8}
                variant="linear"
                glow={0}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                "NOT Registered"
              </GradientText>
              <h1 className="text-red-500 font-bold">U bought the ticket?</h1>
              <h1 className="text-white" style={{
                textAlign:'center',
                opacity: 0.2
              }}>Contact "09970541993" <br /> not to lose your chance!</h1>
            </div>
          )
        }
      </main>
    </div>
  )
}
