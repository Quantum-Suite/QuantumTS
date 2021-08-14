/**
 *
 * QuantumTS
 *
 * @author Neil Shirsat
 *
 */

import IoC from "../meta/IoC";
import { Server } from '../server/Server'
import { ServerConfig } from "../server/ServerConfig";

/**

  ___ ____ __  __ ___ __ __|-|___  ____ ___ __   __  __  __  __
 /  _` | | | |/ _` | `_ `|_   _| | | | `_  `_ `|  \\  \\  \\  \\
|  (_| | |_| | (_| | | | | | | | |_| | | | | | |   \\  \\  \\  \\
 \.__' |\__'_|\__'_|_| |_| |_|  \__'_|_| |_| |_|   //  //  //  //
=====| |===================== (C) 2021 ===========//__//__//__//=
     |_|


 */

const Logo = `


QQQQQQQQQ                                                                   tttt                                                 TTTTTTTTTTTTTTTTTTTTTTT   SSSSSSSSSSSSSSS
QQ:::::::::QQ                                                              ttt:::t                                                 T:::::::::::::::::::::T SS:::::::::::::::S
QQ:::::::::::::QQ                                                            t:::::t                                                 T:::::::::::::::::::::TS:::::SSSSSS::::::S
Q:::::::QQQ:::::::Q                                                           t:::::t                                                 T:::::TT:::::::TT:::::TS:::::S     SSSSSSS
Q::::::O   Q::::::Quuuuuu    uuuuuu    aaaaaaaaaaaaa  nnnn  nnnnnnnn    ttttttt:::::ttttttt    uuuuuu    uuuuuu     mmmmmmm    mmmmmmmTTTTTT  T:::::T  TTTTTTS:::::S
Q:::::O     Q:::::Qu::::u    u::::u    a::::::::::::a n:::nn::::::::nn  t:::::::::::::::::t    u::::u    u::::u   mm:::::::m  m:::::::mm      T:::::T        S:::::S
Q:::::O     Q:::::Qu::::u    u::::u    aaaaaaaaa:::::an::::::::::::::nn t:::::::::::::::::t    u::::u    u::::u  m::::::::::mm::::::::::m     T:::::T         S::::SSSS
Q:::::O     Q:::::Qu::::u    u::::u             a::::ann:::::::::::::::ntttttt:::::::tttttt    u::::u    u::::u  m::::::::::::::::::::::m     T:::::T          SS::::::SSSSS
Q:::::O     Q:::::Qu::::u    u::::u      aaaaaaa:::::a  n:::::nnnn:::::n      t:::::t          u::::u    u::::u  m:::::mmm::::::mmm:::::m     T:::::T            SSS::::::::SS
Q:::::O     Q:::::Qu::::u    u::::u    aa::::::::::::a  n::::n    n::::n      t:::::t          u::::u    u::::u  m::::m   m::::m   m::::m     T:::::T               SSSSSS::::S
Q:::::O  QQQQ:::::Qu::::u    u::::u   a::::aaaa::::::a  n::::n    n::::n      t:::::t          u::::u    u::::u  m::::m   m::::m   m::::m     T:::::T                    S:::::S
Q::::::O Q::::::::Qu:::::uuuu:::::u  a::::a    a:::::a  n::::n    n::::n      t:::::t    ttttttu:::::uuuu:::::u  m::::m   m::::m   m::::m     T:::::T                    S:::::S
Q:::::::QQ::::::::Qu:::::::::::::::uua::::a    a:::::a  n::::n    n::::n      t::::::tttt:::::tu:::::::::::::::uum::::m   m::::m   m::::m   TT:::::::TT      SSSSSSS     S:::::S
QQ::::::::::::::Q  u:::::::::::::::ua:::::aaaa::::::a  n::::n    n::::n      tt::::::::::::::t u:::::::::::::::um::::m   m::::m   m::::m   T:::::::::T      S::::::SSSSSS:::::S
QQ:::::::::::Q    uu::::::::uu:::u a::::::::::aa:::a n::::n    n::::n        tt:::::::::::tt  uu::::::::uu:::um::::m   m::::m   m::::m   T:::::::::T      S:::::::::::::::SS
  QQQQQQQQ::::QQ    uuuuuuuu  uuuu  aaaaaaaaaa  aaaa nnnnnn    nnnnnn          ttttttttttt      uuuuuuuu  uuuummmmmm   mmmmmm   mmmmmm   TTTTTTTTTTT       SSSSSSSSSSSSSSS
          Q:::::Q
           QQQQQQ





`

export class Application {

    server : Server;

    constructor() {
        if (false) {
            console.log(Logo);
        }
        //Freezes the Stack Until the Dependency Parameters are Loaded
        IoC.linkDependencyParam();
    }

    start(
        serverConfig : ServerConfig
    ){
        this.server = new Server(serverConfig);
        this.server.start();
        this.server.listen();
    }

}
