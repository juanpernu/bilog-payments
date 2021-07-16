import Default from "./default";
import Plan from "./plan";

const Plans = ({ plan }) => (plan ? <Plan plan={plan} /> : <Default />);

export default Plans;
