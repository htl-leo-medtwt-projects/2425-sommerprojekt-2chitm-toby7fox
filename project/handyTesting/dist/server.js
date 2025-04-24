"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ngrok_1 = __importDefault(require("ngrok"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static(__dirname + '/../..'));
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const url = yield ngrok_1.default.connect({
            authtoken: '2sw3v9KUgzYZRJxfnmxj9gQbHbj_7Jp99JMNNjYyBNw2N8YzP',
            addr: PORT
        });
        console.log('******** ngrok Tunnel offen ********');
        console.log(url);
        console.log('');
    });
})();
