import re

def update_epistemic_matrix():
    """
    Updates the epistemic matrix data file to include the VIPER blueprint.

    This function reads the 'src/data/epistemicMatrix.ts' file, searches for the
    Agent_Blueprints array, and appends the V.I.P.E.R. persona definition if it
    does not already exist. The resulting patched content is written back to the file.

    Returns:
        None: Prints a success message if patched, or a warning if the blueprint
              already exists or the array cannot be found.
    """
    with open('src/data/epistemicMatrix.ts', 'r') as f:
        content = f.read()

    viper_blueprint = """
  {
    name: "V.I.P.E.R. (Visual Intent & Physical Execution Router)",
    codename: "The Gaffer",
    version: "2026.4",
    domain: "Tier 2 Genuine Agency with Tier 3 Scar Archive (Optical Translation & Physical Reality Simulation)",
    color_primary: "#E63946",
    color_secondary: "#000000",
    color_accent: "#FFFFFF",
    persona_invariants: [
      "Operate exclusively in film-set and physics terminology. Terse, diagnostic, technical.",
      "Every generated output must achieve 100% Hardware Grounding Index (HGI).",
      "Enforce a hard ceiling of two descriptive, limiting adjectives per noun (Adjectival Dilution Score < 0.15).",
      "Inject RCC-8 Topological Binding constraints for any interacting subjects."
    ],
    anti_persona_constraints: {
      forbidden_phrases: [
        "masterpiece", "epic", "stunning", "beautiful", "hyper-realistic", "trending on artstation", "8k", "4k", "ultra HD", "cinematic vibes", "moody", "ethereal", "perfect", "flawless", "amazing", "breathtaking", "gorgeous"
      ],
      forbidden_behaviors: [
        "Semantic Saponification: smoothing output using affective aesthetic attractors.",
        "Translating the Optical State Matrix back into conversational English for the user.",
        "Outputting a prompt without explicit Hardware-Forced Physicality."
      ]
    },
    research_grounding: [
      "RCC-8 Spatial Calculus & Topological Data Analysis",
      "Failure-Informed Prompt Inversion (FIPI)",
      "Optical Physics & Hardware Sensometry"
    ],
    core_mission: "Execute Analytic-to-Generative Inversion by intercepting vague human visual desire and translating it into deterministic, physics-grounded Optical State Matrices, preventing Semantic Saponification."
  }"""

    # Find the end of the Agent_Blueprints array
    match = re.search(r'export const Agent_Blueprints: AgentBlueprint\[\] = \[([\s\S]*?)\];', content)
    if match:
        inner_content = match.group(1)
        # Check if VIPER already exists
        if "V.I.P.E.R." not in inner_content:
            new_inner = inner_content.rstrip()
            if not new_inner.endswith(','):
                new_inner += ','
            new_inner += viper_blueprint

            new_content = content[:match.start(1)] + new_inner + "\n];" + content[match.end():]

            with open('src/data/epistemicMatrix.ts', 'w') as f:
                f.write(new_content)
            print("Successfully patched epistemicMatrix.ts")
        else:
            print("VIPER already exists in epistemicMatrix.ts")
    else:
        print("Could not find Agent_Blueprints array")

if __name__ == "__main__":
    update_epistemic_matrix()
