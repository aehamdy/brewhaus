import Image from "next/image";
import wordLogo from "@/assets/word-logo.svg";

function FooterSignature() {
  return (
    <div>
      <Image src={wordLogo} alt="Logo" className="w-full h-full object-cover" />
    </div>
  );
}

export default FooterSignature;
