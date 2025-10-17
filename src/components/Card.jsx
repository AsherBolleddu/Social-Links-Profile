import avatar from "../assets/avatar-jessica.jpeg";
import Button from "./Button";

export default function Card() {
  return (
    <div className="w-sm p-10 flex flex-col gap-6 bg-grey-800 place-items-center">
      <img src={avatar} alt="" className="w-[88px] h-[88px] rounded-full" />
      <div>
        <h1 className="text-white font-semibold text-2xl text-center">
          Jessica Randall
        </h1>
        <address className="text-custom-green not-italic text-sm font-bold mt-1 text-center">
          London, United Kingdom
        </address>
      </div>

      <p className="text-white text-sm font-normal">
        "Front-end developer and avid reader."
      </p>
      <div className="flex flex-col w-full gap-4">
        <Button link={"https://github.com/"} name={"GitHub"} />
        <Button
          link={"https://www.frontendmentor.io/"}
          name={"FrontEndMentor"}
        />
        <Button link={"https://www.linkedin.com"} name={"LinkedIn"} />
        <Button link={"https://x.com/"} name={"Twitter"} />
        <Button link={"https://www.instagram.com/"} name={"Instagram"} />
      </div>
    </div>
  );
}
