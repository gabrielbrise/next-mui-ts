import React from "react";
import PrimaryButton from "components/Buttons/PrimaryButton";

export default function HomePage() {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <PrimaryButton href="/about">Sobre Nós</PrimaryButton>
    </div>
  );
}
