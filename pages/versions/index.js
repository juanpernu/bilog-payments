import { getVersionContent } from "../../services/versionsService";

import Cover from "../../components/Cover";
import Plans from "../../components/Plans";
import Specs from "../../components/Specs";
import Addons from "../../components/Addon";

const Versions = ({ content, addons }) => {
  const {
    version: {
      id,
      price,
      video = "https://www.youtube.com/embed/-k0AR8PpKF8",
      descripcion,
    },
  } = content;
  return (
    <section className="versions-page">
      <Cover template={id}>
        <Plans plan={id} />
      </Cover>
      <Specs id={id} desc={descripcion} video={video} price={price} />
      {addons && <Addons addons={addons} />}
    </section>
  );
};

export async function getServerSideProps(req, res) {
  const { version = "default", addons = null } = req.query;
  const { data: content } = await getVersionContent(version);
  return { props: { content, addons } };
}

export default Versions;
