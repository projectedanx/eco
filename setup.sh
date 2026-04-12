#!/usr/bin/env bash
# ECO Protocol - SCOS Substrate Scaffolding
# Bootstraps environment in <= 60 seconds

set -e

echo "=> Initiating SCOS Substrate Scaffolding..."

# 1. Package Installation
echo "=> Installing NPM Dependencies..."
npm install

# 2. Environment Variables Template
echo "=> Generating .env.example..."
cat << 'ENVEOF' > .env.example
# Agentic Telemetry Config
CFD_THRESHOLD=0.15
ATS_REDIS_URL=redis://localhost:6379

# LLM Providers
OPENAI_API_KEY=sk_test_...
ANTHROPIC_API_KEY=sk_test_...

# Central Ingestion
DD_API_KEY=your_datadog_key
ENVEOF

if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "=> Created .env from .env.example"
fi

# 3. Health Check Verification (TypeScript Compilation Check)
echo "=> Executing Initial Health Check (TypeScript Compiler)..."
npx tsc --noEmit
echo "=> Health Check PASSED: Austenite Base logic intact."

# 4. Dev Server Start Command
echo "=> Bootstrapping complete. Start the Z-Axis Canvas IDE with:"
echo "npm run dev"
