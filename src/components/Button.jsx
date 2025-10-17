export default function Button({ link, name }) {
  return (
    <a
      className="w-full text-white text-center p-3 bg-grey-700 rounded-lg text-sm font-bold hover:bg-custom-green hover:text-grey-700 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green focus-visible:ring-offset-2 focus-visible:ring-offset-grey-800"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {name}
    </a>
  );
}
