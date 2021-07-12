import { getVersionContent } from "../../services/versionsService";
import { setBaseUrl } from "../../utils";

import Cover from "../../components/Cover";
import Plans from "../../components/Plans";
import Specs from "../../components/Specs";
import Addon from "../../components/Addon";
import Icon from "../../components/Icon";

const Versions = ({ content }) => {
  const { title, id, specs } = content;
  return (
    <section className="versions-page">
      <Cover template={id}>
        <Plans plan={title} />
      </Cover>
      <Specs id={id} specs={specs} />
      <div className="addons">
        <h2 className="addons-title">Mirá todo lo que podes hacer con</h2>
        <Addon
          title="Módulo auditoría"
          description="A complete payments platform engineered for growth"
          icon="control"
        />
      </div>
    </section>
  );
};

export async function getServerSideProps(req, res) {
  const { version = "default" } = req.query;
  setBaseUrl(process.env.VERCEL_ENV);
  const content = await getVersionContent(version);
  return { props: { content } };
}

export default Versions;
