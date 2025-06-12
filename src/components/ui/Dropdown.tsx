import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

export default function Dropdown({
  Title,
  children,
}: {
  Title: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full gap-5 h-fit ">
      <div
        onClick={() => setIsOpen((p) => !p)}
        className="flex h-12 w-full justify-between items-center shadow-[1px_1px_6px_rgba(150,150,150,0.5)]  rounded-sm bg-[#ffffff] px-5 py-2 text-black "
      >
        <h3 className="font-semibold text-md">{Title}</h3>
        {isOpen ? (
          <LiaAngleUpSolid className="text-xl stroke-1" stroke="black" />
        ) : (
          <LiaAngleDownSolid className="text-xl stroke-1" stroke="black" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="bouncy"
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            exit={{ height: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              bounce: 0.3,
              duration: 0.3,
            }}
            layout
            style={{ overflow: "hidden" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
