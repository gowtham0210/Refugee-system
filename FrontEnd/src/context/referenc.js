import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
  const { mutateAsync: createUser, isLoading } = useContractWrite(contract, "createUser")

  const call = () => {
    try {
      const data = createUser([ "gowtham0210", "gowtham", "subramani", "9080980256", "02-10-2002", 20, "India", "M" ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }

  }
  return call();
}