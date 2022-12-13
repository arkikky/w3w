// Ui
import ButtonsLink from "../../components/ui/buttons/ButtonsLink";

const SctionSubHeadingBtn = ({
  className,
  title,
  classNameBtn,
  url,
  label,
  variant,
  size,
  position,
}) => {
  const addClassName = className ? className : "";
  const addClassNameBtn = classNameBtn ? classNameBtn : "";

  return (
    <>
      <div className={`col-span-full ${addClassName}`}>
        <h1 className="text-white font-w3w-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-tight font-bold text-center uppercase">
          {title}
        </h1>
        <ButtonsLink
          typeLink="link-blank"
          className={`${addClassNameBtn}`}
          url={url}
          label={label}
          variant={variant}
          size={size}
          position={position}
        ></ButtonsLink>
      </div>
    </>
  );
};

export default SctionSubHeadingBtn;
