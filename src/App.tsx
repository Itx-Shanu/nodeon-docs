import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Intro from "./pages/Intro"
import IntroHome from "./pages/Intro/Home"
import IntroOverview from "./pages/Intro/Overview"
import Navbar from "./pages/Navbar"
import bg from "./assets/overallbg.png"
import UseCases from "./pages/Intro/UseCases"
import Team from "./pages/Intro/Team"
import InfrastructureModel from "./pages/Intro/InfrastructureModel"
import RoadMap from "./pages/Intro/RoadMap"

import PlatForm from "./pages/platform"
import PlatFormHome from "./pages/platform/Home"
import ValidatorInfrastructure from "./pages/platform/ValidatorInfrastructure"
import MultiChainValidators from "./pages/platform/MultiChainValidators"
import DedicatedValidatorClusters from "./pages/platform/DedicatedValidatorClusters"
import ValidatorDeployment from "./pages/platform/ValidatorDeployment"
import MonitoringDashboard from "./pages/platform/MonitoringDashboard"
import SecureInfrastructure from "./pages/platform/SecureInfrastructure"
import NetworkParticipation from "./pages/platform/NetworkParticipation"
import InfrastructureArchitecture from "./pages/platform/InfrastructureArchitecture"

import Validators from "./pages/Validators"
import ValidatorsHome from "./pages/Validators/Home"
import N1Validator from "./pages/Validators/N1Validator"
import N2ValidatorPlus from "./pages/Validators/N2ValidatorPlus"
import ValidatorRequirements from "./pages/Validators/ValidatorRequirements"
import ValidatorDeploymentWorkflow from "./pages/Validators/ValidatorDeploymentWorkflow"
import ValidatorRewards from "./pages/Validators/ValidatorRewards"
import ValidatorMonitoring from "./pages/Validators/ValidatorMonitoring"
import ValidatorSecurity from "./pages/Validators/ValidatorSecurity"

import Infrastructure from "./pages/Infrastructure"
import InfrastructureHome from "./pages/Infrastructure/Home"
import ServerArchitecture from "./pages/Infrastructure/ServerArchitecture"
import MultiRegionHosting from "./pages/Infrastructure/MultiRegionHosting"
import NetworkPerformance from "./pages/Infrastructure/NetworkPerformance"
import MonitoringSystem from "./pages/Infrastructure/MonitoringSystem"
import InfrastructureScalability from "./pages/Infrastructure/InfrastructureScalability"
import InfrastructureReliability from "./pages/Infrastructure/InfrastructureReliability"

import Architecture from "./pages/architecture" 
import ArchitectureHome from "./pages/architecture/Home"
import InfrastructureMonitoring from "./pages/architecture/InfrastructureMonitoring"
import PerformanceAnalytics from "./pages/architecture/PerformanceAnalytics"
import AutomatedAlertSystems from "./pages/architecture/AutomatedAlert"
import MonitoringSecurity from "./pages/architecture/MonitoringSecurity"
import MonitorDashboard from "./pages/architecture/MonitorDashboard"
import MonitoringReliability from "./pages/architecture/MonitoringReliability"

import Resources from "./pages/resources"
import ResourcesHome from "./pages/resources/Home"
import Footer from "./pages/Footer"


export function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="intro" element={<Intro />}>
          <Route index element={<IntroHome />} />

          <Route path="overview" element={<IntroOverview />} />
          <Route path="usecases" element={<UseCases />} />
          <Route path="team" element={<Team />} />
          <Route path="InfrastructureModel" element={<InfrastructureModel />} />
          <Route path="roadmap" element={<RoadMap />} />
        </Route>

        <Route path="platform" element={<PlatForm />}>
          <Route index element={<PlatFormHome />} />
          <Route
            path="validatorinfrastructure"
            element={<ValidatorInfrastructure />}
          />
          <Route
            path="multichainvalidators"
            element={<MultiChainValidators />}
          />
          <Route
            path="DedicatedValidatorClusters"
            element={<DedicatedValidatorClusters />}
          />
          <Route path="validatordeployment" element={<ValidatorDeployment />} />
          <Route path="monitoringdashboard" element={<MonitoringDashboard />} />
          <Route
            path="secureinfrastructure"
            element={<SecureInfrastructure />}
          />
          <Route
            path="networkparticipation"
            element={<NetworkParticipation />}
          />
          <Route
            path="infrastructurearchitecture"
            element={<InfrastructureArchitecture />}
          />
        </Route>

        <Route path="validators" element={<Validators />}>
          <Route index element={<ValidatorsHome />} />
          <Route path="N1validator" element={<N1Validator />} />
          <Route path="N2validatorplus" element={<N2ValidatorPlus />} />
          <Route
            path="validatorrequirements"
            element={<ValidatorRequirements />}
          />
          <Route
            path="validatordeploymentWorkflow"
            element={<ValidatorDeploymentWorkflow />}
          />
          <Route path="validatorrewards" element={<ValidatorRewards />} />
          <Route path="validatormonitoring" element={<ValidatorMonitoring />} />
          <Route path="validatorsecurity" element={<ValidatorSecurity />} />
        </Route>

        <Route path="infrastructure" element={<Infrastructure />}>
          <Route index element={<InfrastructureHome />} />
          <Route path="serverarchitecture" element={<ServerArchitecture />} />
          <Route path="multiregionhosting" element={<MultiRegionHosting />} />
          <Route path="validatorsecurity" element={<ValidatorSecurity />} />
          <Route path="networkperformance" element={<NetworkPerformance />} />
          <Route path="monitoringsystem" element={<MonitoringSystem />} />
          <Route
            path="infrastructurescalability"
            element={<InfrastructureScalability />}
          />
          <Route
            path="infrastructurrReliability"
            element={<InfrastructureReliability />}
          />
         <Route path="infrastructurereliability" element={<InfrastructureReliability />} />

        </Route>

        <Route path="architecture" element={<Architecture />}>
          <Route index element={<ArchitectureHome />} />
          <Route
            path="infrastructuremonitoring"
            element={<InfrastructureMonitoring />}
          />
          <Route
            path="performanceanalytics"
            element={<PerformanceAnalytics />}
          />
          <Route path="automatedalert" element={<AutomatedAlertSystems />} />
          <Route path="monitoringsecurity" element={<MonitoringSecurity />} />
          <Route path="monitordashboard" element={<MonitorDashboard />} />
          <Route
            path="monitoringreliability"
            element={<MonitoringReliability />}
          />
        </Route>



         <Route path="resources" element={<Resources />}>
          <Route index element={<ResourcesHome />} />
          

         


        </Route>




      </Routes>

      <Footer/>
    </div>
  )
}

export default App
