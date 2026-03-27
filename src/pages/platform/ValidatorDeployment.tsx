export default function ValidatorDeployment() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">
        Validator Deployment
      </h1>

      {/* Deployment Process */}
      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Deployment Process
        </h2>
        <p>
          Nodes On simplifies the validator deployment process through a
          structured infrastructure environment.
        </p>
        <p>
          The deployment workflow typically includes the following steps:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Selection of validator infrastructure package</li>
          <li>Selection of blockchain network</li>
          <li>
            Deployment of validator node through Nodes On infrastructure
          </li>
          <li>Continuous monitoring and performance management</li>
        </ol>
        <p>
          Once deployed, the validator node connects to the blockchain network
          and begins participating in transaction validation and consensus
          operations.
        </p>
      </section>

      {/* Infrastructure Automation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Infrastructure Automation
        </h2>
        <p>
          Nodes On automates several processes involved in validator deployment.
        </p>
        <p>Automation includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Server configuration</li>
          <li>Node synchronization</li>
          <li>Network connectivity setup</li>
          <li>Infrastructure monitoring initialization</li>
        </ul>
        <p>
          This automation significantly reduces the complexity associated with
          running validator infrastructure independently.
        </p>
      </section>
    </div>
  );
}