var codeTXT = "";

function START_RUN() {
    RELOAD_CODE_VAR();
    RUN(codeTXT)
}

function RELOAD_CODE_VAR() {
    codeTXT = document.getElementById("code").value;
    console.log(codeTXT);
}

function RUN(code) {
    RUN_CODE(code);
}