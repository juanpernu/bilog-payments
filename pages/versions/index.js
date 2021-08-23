import { Fragment, useEffect, useState } from "react";

import { billingInitialState } from "../../utils";
import { getVersionContent } from "../../services/versionsService";

import Cover from "../../components/Cover";
import Plans from "../../components/Plans";
import Specs from "../../components/Specs";
import Loading from "../../components/Loading";
import Billing from "../../components/Billing";
import Estimate from "../../components/Estimate";
import { Features, Commons } from "../../components/Features";
import { Addons, AlwaysOnAddons } from "../../components/Addon";

const Versions = ({
  content,
  addons,
  pcCount,
  shallow,
  parsedRv: rowVersion,
  clientId,
}) => {
  const [billing, setBilling] = useState(billingInitialState);
  const [loading, setLoading] = useState(false);
  const {
    lista_sms: sms,
    lista_email: emkt,
    version: { id, price, video, descripcion, addons: modules },
  } = content;
  const alwaysOn = { sms, emkt };

  useEffect(
    () =>
      setBilling({
        pricing: {
          version: id,
          price,
          addons: modules,
          sms,
          emkt,
        },
        pcCount,
        selected: billingInitialState.selected,
      }),
    []
  );

  const alwaysOnHandler = (key, value) => {
    const [result] = billing.pricing[key].filter((obj) => obj.price === value);
    setBilling({
      ...billing,
      selected: { ...billing.selected, [key]: result ?? false },
    });
  };

  return (
    <section className="versions-page">
      {loading && <Loading />}
      <Cover template={id}>
        <Plans plan={id} />
      </Cover>
      <Specs
        id={id}
        desc={descripcion}
        video={video}
        price={price}
        pcCount={pcCount}
      />
      {!id && <Commons />}
      <Features version={id} />
      {addons && <Addons addons={addons} />}
      {id && !shallow && (
        <Fragment>
          <AlwaysOnAddons addons={alwaysOn} onChange={alwaysOnHandler} />
          <Billing
            billing={billing}
            selectedAddons={addons}
            rowversion={rowVersion}
            clientId={clientId}
            onChange={() => setLoading(!loading)}
          />
        </Fragment>
      )}
      {(!id || shallow) && <Estimate />}
    </section>
  );
};

export async function getServerSideProps(req, res) {
  const {
    version = "default",
    addons = null,
    pcCount = null,
    shallow = false,
    rowVersion = null,
    clientId = null,
  } = req.query;
  const { data: content } = await getVersionContent(version);

  // TODO review this parsed query param
  const parsedRv = rowVersion && rowVersion.replace(" ", "+");
  return {
    props: { content, addons, pcCount, shallow, parsedRv, clientId },
  };
}

export default Versions;
