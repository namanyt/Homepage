import { ServerOverload } from "./_error";

export default function Custom503() {
	return <ServerOverload />;
}