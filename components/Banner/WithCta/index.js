import { useRouter } from "next/router";
import { Button } from "../../Buttons";

const WithCta = ({ title, buttonMod, buttonText, url }) => {
  const router = useRouter();

  const handleOnClick = async () => {
    router.push({
      pathname: url,
    });
  };

  return (
    <div className="bannerCta--container">
      <div className="bannerCta--content">
        <h4 className="bannerCta--title">{title}</h4>
        <div className="bannerCta--buttons">
          <Button modifier={buttonMod} onClick={() => handleOnClick()}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WithCta;
