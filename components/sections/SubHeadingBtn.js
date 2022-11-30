// Ui
import ButtonsOpenLink from "../../components/ui/buttons/ButtonsOpenLink";

const SctionSubHeadingBtn = ({ className, classNameBtn, title, url, label, type, size, position }) => {
  const addClassName = className ? className : "";
  const addClassNameBtn = classNameBtn ? classNameBtn : "";

  return (
    <>
      <div className={`col-span-full ${addClassName}`}>
        <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
          {title}
        </h1>
        <ButtonsOpenLink
          className={`${addClassNameBtn}`}
          url={url}
          label={label}
          type={type}
          size={size}
          position={position}
        ></ButtonsOpenLink>
      </div>
    </>
  );
};

export default SctionSubHeadingBtn;
