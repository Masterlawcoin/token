# Nexus Disc — Mobile UX Contract

The duel is phone-first and does not use manual zoom buttons.

## Gestures

- One finger drag on empty board: pan the disc/camera with inertia.
- Tap card: inspect/select.
- Drag selected card to highlighted zone: summon/play.
- Swipe up on own summoned unit: attack mode.
- Tap highlighted enemy: confirm target.
- Long press card/unit: full readable details.
- Two-finger pinch is reserved for accessibility scaling only, not required for play.

## Readability

Minimum gameplay label 12 CSS px; primary numbers 18–28 CSS px. Cards in hand never show full rules text: they show cost, name and effect icon. Long press opens the readable card sheet.

## Disc camera

Camera follows the current action automatically but releases immediately to finger pan. The minimap is a collapsible drawer and is never permanently over the battlefield.

## Turn tempo

DRAW -> ENERGY -> DICE should complete visually in under 1.4 seconds unless the player explicitly opens details. MAIN starts with a single suggested action arrow for new players. Experienced players can disable suggestions.

## Tutorial

First practice duel uses a deterministic hand and highlights one legal action at a time. The AI demonstrates summon, barrier, attack, reaction and destruction. Tutorial victory requires 3 KOs, identical to the real win condition.

## Desktop

Desktop is spectator/QR entry by default. Competitive play targets portrait/landscape mobile touch layouts first.
