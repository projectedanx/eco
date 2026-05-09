import re

def update_readme():
    """
    Updates the README.md file to include the V.I.P.E.R. Emergence Strategy.

    This function reads the 'README.md' file, searches for the Sovereign Agents
    list section, and inserts a bullet point linking to the VIPER blueprint and
    strategy directory. The modified content is written back to the file.

    Returns:
        None: Prints a success message upon successful patching, or a warning
              if the target section cannot be found or if VIPER is already added.
    """
    with open('README.md', 'r') as f:
        content = f.read()

    addition = """
* **V.I.P.E.R. Emergence Strategy**: Refer to [VIPER_BLUEPRINT.md](VIPER_BLUEPRINT.md) for the definitive specification of the VIPER (Visual Intent & Physical Execution Router) persona, and the `VIPER_EMERGENCE_STRATEGY/` directory for the implementation of its optical constraint-based analytic-to-generative inversion."""

    # Find the bulleted list section under Sovereign Agents
    target_string = "* **Sovereign Agents**: Refer to [KUT_BLUEPRINT.md](KUT_BLUEPRINT.md) for the definitive specification of the KUT agent persona, and [LEXIS_SOVEREIGN_BLUEPRINT.md](LEXIS_SOVEREIGN_BLUEPRINT.md) for the LEXIS SOVEREIGN agent persona."

    if target_string in content and "V.I.P.E.R. Emergence Strategy" not in content:
        new_content = content.replace(target_string, target_string + addition)
        with open('README.md', 'w') as f:
            f.write(new_content)
        print("Successfully patched README.md")
    else:
        print("Could not find target string in README.md or VIPER already added.")

if __name__ == "__main__":
    update_readme()
