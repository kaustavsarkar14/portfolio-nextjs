import Image from "next/image";
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="flex" >
      <Input/>
      <ModeToggle/>
    </div>
  );
}
