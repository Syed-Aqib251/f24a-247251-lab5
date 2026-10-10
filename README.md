# Lab 05 The DOM and a form

Roll number: **247251**  
Project: **1 The seats**  
Place: **Canteen**  
Header: **green**, with a white place name.

The last digit is 1, and 1 divided by 3 leaves remainder 1.

## Run

Open `seats.html` directly in a modern browser. No installation, build, server, or internet connection is required.

## Use

Enter a name and a whole seat count from 1 to 8, then click an empty seat. The selected seat and the following seats are reserved together. The same name can hold several blocks.

Reservations are atomic: a block crossing an occupied seat or the end of the hall changes no seats. A word in the count produces the custom validity message `not a number`. Correct the count and click again to clear the error.

Clicking a taken seat frees only that seat, even if the name or count inputs are blank or invalid. An empty or whitespace-only name leaves an empty seat free and displays `undefined` in the status line. Refresh restores all eight seat numbers, the initial free count, and the sentence written in the HTML file.

## Check the final page

1. Refresh: every seat shows its number, free seats is 8, and the initial sentence is visible.
2. Enter Ali and 3; click the span in seat 1. Seats 1, 2, and 3 show Ali; free seats is 5.
3. Enter Ali and 2; click seat 6. Seats 6 and 7 show Ali; free seats is 3.
4. Enter Bea and 3; click empty seat 4. Its proposed block reaches occupied seat 6, so every seat and the free count stay unchanged.
5. Enter Ali and nine; click seat 4. The count reports `not a number`; seat 4 still shows 4.
6. Click occupied seat 2. Only seat 2 is freed; seats 1 and 3 still show Ali; free seats is 4.
7. Clear the name; click seat 4. The status shows `undefined` and no seat changes.
8. Refresh again to confirm the complete reset.

Also check an out-of-bounds block from seat 8, zero/negative/fractional/empty counts, a corrected count, keyboard activation, and a narrow screen.

## Handout discrepancy

Topic 5 says clicking occupied seat 6 with Bea and 3 leaves that seat filled. This is the behavior at the Topic 5 commit. Topic 6 explicitly adds the rule that clicking an occupied seat frees it, which is also stated in the opening description. The finished page follows Topic 6. To check an overlapping reservation in the finished page, start at empty seat 4 with count 3 so the block encounters occupied seat 6.

## Files and submission

- `seats.html`: the eight buttons are already in the HTML, with the required IDs, spans, class, and data attributes.
- `styles.css`: responsive layout and the assigned green header.
- `seats.js`: one delegated click listener on the hall, guarded DOM references, native count validation, atomic reservations, individual releases, and live status.
- Eight topic commits use the exact messages in the handout.

The Word report is supplied separately and excluded from Git as instructed. Upload the named report to the Classroom assignment **Lab 05 — The DOM and a form** by **14 October 2026 at 16:00**.
