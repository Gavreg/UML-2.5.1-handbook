"""
Name: section_pipeline.py
Purpose: Run one deterministic stage of a configured UML clause without manual command orchestration.
Interface: python scripts/section_pipeline.py --clause 10 --stage 1 [--check] [--static-only]
Goal: Give the editor a short result or a focused failure log; never advance to another stage implicitly.
Requires: Python 3 standard library, scripts/sections.json and the selected stage's tool dependencies.
"""

from argparse import ArgumentParser
import os
from pathlib import Path
import subprocess
import sys

from section_config import load_sections, section_settings


ROOT = Path(__file__).resolve().parent.parent
STAGES = {
    1: "Извлечение PDF и реестр XMI",
    2: "Заготовки данных и русского содержимого",
    3: "Свойства и наследование из XMI",
    4: "Страницы, маршруты и поисковый индекс",
    5: "Интерактивные SVG",
    6: "Полнота, ссылки, геометрия и браузер",
}


def command_for(clause, stage, check=False, static_only=False):
    settings = section_settings(clause)
    scripts = {
        1: "prepare_section.py",
        2: "scaffold_section.py",
        3: "sync_xmi_properties.py",
        4: "build_site.py",
        5: settings["svg_generator"],
        6: "validate_site.py",
    }
    command = [sys.executable, str(ROOT / "scripts" / scripts[stage])]
    command.extend(["--clause", clause])
    if check and stage != 6:
        command.append("--check")
    if stage == 6 and static_only:
        command.append("--static-only")
    return command


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", required=True, choices=sorted(load_sections(), key=int))
    parser.add_argument("--stage", required=True, type=int, choices=sorted(STAGES))
    parser.add_argument("--check", action="store_true", help="Check stages 1-5 without rewriting their outputs")
    parser.add_argument("--static-only", action="store_true", help="Skip browser checks at stage 6")
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    command = command_for(args.clause, args.stage, args.check, args.static_only)
    script = Path(command[1])
    if not script.is_file():
        raise SystemExit(
            f"Для раздела {args.clause}, этапа {args.stage} ещё не создан {script.relative_to(ROOT)}"
        )
    print(f"Раздел {args.clause}, этап {args.stage}: {STAGES[args.stage]}")
    environment = dict(os.environ, PYTHONIOENCODING="utf-8")
    result = subprocess.run(
        command,
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        env=environment,
    )
    lines = [line for line in result.stdout.splitlines() if line.strip()]
    if result.returncode:
        print(result.stdout, end="")
        raise SystemExit(result.returncode)
    print(lines[-1] if lines else "OK")


if __name__ == "__main__":
    main()
