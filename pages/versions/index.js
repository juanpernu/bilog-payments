import { Fragment, useEffect, useState } from "react";

import { billingInitialState } from "../../utils";
import { getVersionContent } from "../../services/versionsService";

import Cover from "../../components/Cover";
import Plans from "../../components/Plans";
import Specs from "../../components/Specs";
import Billing from "../../components/Billing";
import Estimate from "../../components/Estimate";
import { Features, Commons } from "../../components/Features";
import { Addons, AlwaysOnAddons } from "../../components/Addon";

const Versions = ({ content, addons, profCount, shallow }) => {
  const [billing, setBilling] = useState(billingInitialState);
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
        profCount,
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
      <Cover template={id}>
        <Plans plan={id} />
      </Cover>
      <Specs
        id={id}
        desc={descripcion}
        video={video}
        price={price}
        profCount={profCount}
      />
      {!id && <Commons />}
      <Features version={id} />
      {addons && <Addons addons={addons} />}
      {id && !shallow && (
        <Fragment>
          <AlwaysOnAddons addons={alwaysOn} onChange={alwaysOnHandler} />
          <Billing billing={billing} selectedAddons={addons} />
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
    profCount = 1,
    shallow = false,
  } = req.query;
  const { data: content } = await getVersionContent(version);
  return { props: { content, addons, profCount, shallow } };
}

export default Versions;
