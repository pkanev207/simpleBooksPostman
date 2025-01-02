#!/usr/bin/env node
// hashbang telling the OS which interpreter to use - node

console.log("Something");

// run in the console: start-something --pokemon=charmander
// console.log(process.argv);

const inquirer = require("inquirer");
const yargs = require("yargs");
const { argv } = yargs(process.argv);
// console.log(yargs);
console.log(argv);

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.slice(0, 5).map((x) => x.move.name);
  console.log(moves.join(", "));
};

// printFiveMoves("charmander");
// printFiveMoves(process.argv[2].slice(process.argv[2].indexOf("=") + 1));
// better to install yargs
printFiveMoves(argv.pokemon);

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to see it's first five moves",
    // dragonite
  },
]).then((answers) => {
  console.log(answers);
  const pokemon = answers.pokemon;
  printFiveMoves(pokemon);
});

// const yargs = require("yargs/yargs");
// const { hideBin } = require("yargs/helpers");

// yargs(hideBin(process.argv))
//   .command(
//     "serve [port]",
//     "start the server",
//     (yargs) => {
//       return yargs.positional("port", {
//         describe: "port to bind on",
//         default: 5000,
//       });
//     },
//     (argv) => {
//       if (argv.verbose) console.info(`start server on :${argv.port}`);
//       serve(argv.port);
//     }
//   )
//   .option("verbose", {
//     alias: "v",
//     type: "boolean",
//     description: "Run with verbose logging",
//   })
//   .parse();
