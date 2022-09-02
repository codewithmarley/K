class VARIABLE_HOLDER {
    constructor() {
        this.variables = {
            
        }
    }

    createVariable(name, value) {
        this.variables[name] = value
    }

    readVariable(name) {
        return this.variables[name]
    }

    editVariable(name, value) {
        this.variables[name] = value
    }

    CEvariable(name, value) {
        this.variables[name] = value
    }
}

class GLOBAL_STORE {
    constructor() {
        this.name = 'GLOBAL_STORE'
    }

    breakBySpace(line) {
        return line.split(' ')
    }

    breakBySemiC(line) {
        return line.split(';\n')
    }
}

const store = new GLOBAL_STORE()
const variables = new VARIABLE_HOLDER()

class INTERPETER {
    constructor() {
        console.info("Created Interpeter")
    }

    interpetLine(line) {
        var wrds = store.breakBySpace(line)
        var param1 = wrds[1]
        switch (wrds[0]) {
            case "PRINT":
                console.log(param1);
                try {
                    var ___dato___ = param1;
                    document.getElementById("console").innerHTML = (`${document.getElementById("console").innerHTML}<br><span style="color: white !important">${___dato___}</span>`)
                } catch (error) {}
                break;

            case "END":
                return "--end--";
                break;
            
            case "ERROR":
                console.error(param1);
                try {
                    var ___dato___ = param1;
                    document.getElementById("console").innerHTML = (`${document.getElementById("console").innerHTML}<br><span style="color: rgb(255, 61, 61) !important">ERROR: ${___dato___}</span>`)
                } catch (error) {}
                break;

            case "WARN":
                console.warn(param1);
                try {
                    var ___dato___ = param1;
                    document.getElementById("console").innerHTML = (`${document.getElementById("console").innerHTML}<br><span style="color: yellow !important">WARNING: ${___dato___}</span>`)
                } catch (error) {}
                break;

            case "VARIABLE":
                if (wrds[2] == "IS") {
                    variables.createVariable(wrds[1], wrds[3])
                }
                break;
            
            case "PRINT_VAR":
                console.log(variables.readVariable(param1));
                try {
                    var ___dato___ = variables.readVariable(param1);
                    document.getElementById("console").innerHTML = (`${document.getElementById("console").innerHTML}<br><span style="color: white !important">${___dato___}</span>`)
                } catch (error) {}
                break;
            
            case "IF":
                if (variables.readVariable(wrds[1]) == variables.readVariable(wrds[3]) && wrds[2] == "EQUALS") {
                    this.interpetLine(wrds[5] + " " + wrds[6] + " " + wrds[7]);
                } else if (variables.readVariable(wrds[1]) != variables.readVariable(wrds[3]) && wrds[2] == "NOT") {
                    this.interpetLine(wrds[5] + " " + wrds[6] + " " + wrds[7]);
                }
                break;
            
            case "COMMENT":
                return "--comment--";
                break;
        
            default:
                return "--NONCE--";
                break;
        }
    }

    interpetCode(code) {
        var file_lines = store.breakBySemiC(code)
        file_lines.forEach(line => {
            var interpeted = this.interpetLine(line);
            if (interpeted == "--end--") {
                return;
            }
        });
    }
}

var interpeter = new INTERPETER()

function RUN_CODE(code) {
    interpeter.interpetCode(code)
}