import { ILoader } from "../../types";

const Loader = ({ className = "", trigger = false }: ILoader) => {
  return trigger ? (
    <div className={className}>
      <span className={`loading loading-dots loading-md`}></span>
    </div>
  ) : (
    ""
  );
};

export default Loader;
