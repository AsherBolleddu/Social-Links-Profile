import avatar from "../assets/avatar-jessica.jpeg";
import Button from "./Button";

export default function Card() {
  return (
    <section
      aria-labelledby="name"
      className="max-w-sm w-full p-6 sm:p-10 flex flex-col gap-6 bg-grey-800 place-items-center rounded-xl"
    >
      <img
        src={avatar}
        alt="Jessica Randall Profile Picture"
        className="w-[88px] h-[88px] rounded-full"
      />
      <div>
        <h1 className="text-white font-semibold text-2xl text-center">
          Jessica Randall
        </h1>
        <p className="text-custom-green not-italic text-sm font-bold mt-1 text-center">
          London, United Kingdom
        </p>
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
    </section>
  );
}
