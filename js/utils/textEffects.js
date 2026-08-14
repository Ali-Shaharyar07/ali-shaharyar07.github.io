const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@&#";

export function scramble(
    element,
    target = element.dataset.text,
    speed = 30,
    duration = 13
) { 

    clearInterval(element.timer);

    let iteration = 0;

    element.timer = setInterval(() => {

        element.textContent = target
            .split("")
            .map((letter, index) => {

                if (letter === " ")
                    return " ";

                if (index < iteration)
                    return letter;

                return CHARS[
                    Math.floor(Math.random() * CHARS.length)
                ];

            })
            .join("");

        iteration += target.length / duration;

        if (iteration >= target.length) {

            clearInterval(element.timer);
            element.textContent = target;

        }

    }, speed);

}