import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Custom Webhooks",
      image:
"https://cdn.iconscout.com/icon/free/png-256/free-webhooks-icon-svg-download-png-282425.png?f=webp",
      className: "absolute  top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Google Calender",
      image:
"data:image/png;base64,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",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Google Docs",
      image:
"https://i.pinimg.com/736x/39/4f/0a/394f0af82bf84be791633e850dd91e30.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
        title: "Google Sheets",
        image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968557.png",
        className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "GitHub",
      image:
"https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Gmail",
      image:
"https://img.freepik.com/premium-vector/gmail-icon_1273375-1247.jpg?semt=ais_hybrid&w=740&q=80",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Notion",
      image:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArZMRyxVf90ZUmFfArULupQkWsGuE4cS8WQ&s",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Automate any thing, i mean anything!!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
