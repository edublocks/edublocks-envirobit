Blockly.Python['import_envirobit'] = function (block) {
    var code = 'from envirobit import *\n';
    return code;
};

Blockly.Python['temperature'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'temperature()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pressure'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'pressure()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['humidity'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'humidity()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['altitude'] = function (block) {
    var code = 'altitude()\n';
    return code;
}

Blockly.Python['set_qnh'] = function (block) {
    var val = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    const code = `set_qnh(` + val + `)\n`;
    return code;
}
