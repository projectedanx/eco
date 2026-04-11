# ECO Protocol - System Architecture (C4 Model)

## Architectural Decision Record (ADR)
**Context**: The ECO Protocol requires a scalable, resilient system to support paraconsistent logic (RCC-8 Z-Axis Inference), real-time agent quarantine (ADQE), and pre-execution surrogate reasoning validation (SRVL).
**Decision**: Adopt an Event-Driven Microservices topology. This decouples the high-latency cognitive tasks (e.g., LLM inference, Z-axis rendering) from low-latency governance features (ADQE, OpenTelemetry).
**Trade-offs**: Increased operational complexity vs. isolated failure domains and independent scaling of reasoning vs. visualization workloads.

---

## 1. System Context (Level 1)

### Actors
* **Symbiotic Gardener (Human)**: System Architects, Product Managers, and UX Designers interacting with the visual IDE.
* **Autonomous Agent (AI)**: Operates within the SCOS Substrate, executing tasks and navigating epistemic topologies.

### System Boundaries
* **ECO Nexus**: The core platform providing Agentic Telemetry, Topological Blending, and Surrogate Reasoning.

### External Dependencies
* **LLM Provider API**: External AI inference engines (e.g., OpenAI, Anthropic).
* **Central Ingestion Pipeline**: Enterprise logging and observability stack (e.g., Datadog, Prometheus).

---

## 2. Container Topology (Level 2)

### 2.1 Agentic Telemetry Service (ATS)
* **Responsibility**: Real-time OpenTelemetry tracking of Epistemic Divergence Score (EDS) and triggering the Agentic Drift Quarantine Engine (ADQE).
* **Technology**: Go/Rust (for low latency event processing), Redis (for Epistemic Escrow state).
* **Data Flow**: Subscribes to agent execution streams; emits metrics to Central Ingestion; commands Agent Runner to pause threads.

### 2.2 SCOS Substrate & Agent Runner
* **Responsibility**: Hosts the autonomous agents, executes plans, and manages the Pluriversal Knowledge Capsulation Protocol (PKCP) extrusion.
* **Technology**: Python/Node.js, gRPC for inter-service communication.
* **Data Flow**: Interacts with LLM APIs; routes execution traces to ATS; requests validation from SRVL.

### 2.3 Surrogate Reasoning Validation Loop (SRVL)
* **Responsibility**: Intercepts tool execution, compiles Tool Schemas into `preConditions`, `successCriteria`, and `failureModes` before execution.
* **Technology**: TypeScript/Node.js (for AST parsing and schema validation).
* **Data Flow**: Blocking gateway before SCOS tool execution.

### 2.4 Topological Blending IDE (Z-Axis Canvas)
* **Responsibility**: Visual workspace mapping contradictory requirements onto a 3D Z-axis.
* **Technology**: React, Vite, WebGL/Three.js.
* **Data Flow**: Connects to the AEWSolver Backend for relational vectors; provides UI for Symbiotic Gardeners.

### 2.5 AEWSolver Backend (Simulation Engine)
* **Responsibility**: Executes CoC Enactment Simulations and calculates structural conservation vs. topological novelty.
* **Technology**: Python (`aew_simulation.py`), REST/GraphQL API.
* **Data Flow**: Called by the Z-Axis Canvas for simulation results.

### 2.6 Meta-Corrective API
* **Responsibility**: Detects epistemic closure and injects anti-fragile prompts.
* **Technology**: Python (Semantic analysis).
* **Data Flow**: Monitors Agent Runner streams; injects prompts back into the active context window.

---

## 3. Component Details (Level 3 - Highlight: ADQE)

### Agentic Drift Quarantine Engine (ADQE) Component
* **EDS Calculator**: Computes `eds = beta_1 / baseline_bias`.
* **Escrow Manager**: Serializes the active thread state and stores it in Redis when `eds > cfd_threshold`.
* **Telemetry Emitter**: Publishes the quarantine event to the OpenTelemetry bus.
