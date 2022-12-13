(function() {
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const settingsButton = document.getElementById("settings");

    let minutesValue = 15;
    let secondsValue = 0;
    let timerIntervalId = null;

    const resumeTimer = () => {
        const timerStartDate = new Date();

        const msToAdd = (1000 * 60 * minutesValue) + (1000 * secondsValue);
        const timerEndDate = new Date(timerStartDate.getTime() + msToAdd);
        
        timerIntervalId = setInterval(() => {
            const now = new Date();
            // const msElapsed = now.getTime() - timerStartDate.getTime();
            const msRemaining = timerEndDate.getTime() - now.getTime();

            const minutesRemaining = Math.floor(msRemaining / 1000 / 60);
            const secondsRemaining = Math.floor(msRemaining / 1000 % 60);

            setMinutesValue(minutesRemaining);
            setSecondsValue(secondsRemaining);
        }, 1000);
    };

    const pauseTimer = () => {
        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }
    };
    
    const formatField = (val) => {
        let result = val.toString();

        if (val < 10) {
            result = `0${result}`;
        }

        return result;
    };

    const setMinutesValue = (val) => {
        minutesValue = val;
        minutesInput.value = formatField(val);
    };

    const setSecondsValue = (val) => {
        secondsValue = val;
        secondsInput.value = formatField(val);
    };

    startButton.addEventListener("click", () => {
        resumeTimer();
    });
})();