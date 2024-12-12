"use client";
import React from "react";
import Image from "@/components/Image";
import { motion } from "framer-motion";

const Photo = () => {
    return (
        <div className="relative flex size-full items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn",
                    },
                }}
                className="relative"
            >
                <div className="relative size-[300px] xl:size-[400px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 2.4,
                                duration: 0.4,
                                ease: "easeInOut",
                            },
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            path="/profile/profile7.png"
                            width={1920}
                            height={1920}
                            alt="CM"
                        />
                    </motion.div>
                    <motion.svg
                        className="absolute inset-0 size-full"
                        fill="none"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="91"
                            stroke="#00ff99"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 10 20" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.svg>
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;