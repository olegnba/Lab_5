        const steps = [
            {
                question: `
                    <section class="game__question">
                        <h2>Футбольная академия</h2>
                        <img src="images/match_16.jpeg" alt="Тренер даёт указания перед товарищеским матчем">
                        <p class="game__text">Вам 16 лет. Вы в футбольной академии, и тренер даёт вам шанс сыграть в товарищеском матче. Как поступите?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 0)">A) Отказаться из-за страха провала</button>
                            <button class="game__option" onclick="checkAnswer('b', 0)">B) Сыграть, чтобы показать себя</button>
                            <button class="game__option" onclick="checkAnswer('c', 0)">C) Поддержать команду с бровки</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: -2, teamwork: -2, health: 0 },
                    b: { skill: 2, teamwork: 1, health: 0 },
                    c: { skill: 0, teamwork: 1, health: 1 }
                },
                feedback: {
                    a: "Вы отказались играть, боясь провала. Тренер разочарован, но даёт вам ещё один шанс.",
                    b: "Вы сыграли и показали неплохую технику, но устали к концу матча.",
                    c: "Вы поддержали команду, и это укрепило ваш дух, но вы не показали себя."
                }
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Комната перед сном</h2>
                        <img src="images/room_17.jpeg" alt="Ночь перед важной игрой">
                        <p class="game__text">Вам 17 лет. Завтра важная игра, и пора выключить телефон и лечь спать. Как поступите?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 1)">A) Лечь спать пораньше</button>
                            <button class="game__option" onclick="checkAnswer('b', 1)">B) Пойти на вечеринку с друзьями</button>
                            <button class="game__option" onclick="checkAnswer('c', 1)">C) Посидеть ещё немного в телефоне</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: 1, teamwork: 1, health: 2 },
                    b: { skill: -5, teamwork: -5, health: -5 },
                    c: { skill: 0, teamwork: 0, health: -2 }
                },
                feedback: {
                    a: "Вы хорошо выспались и чувствуете себя свежим перед игрой. Тренер доволен вашей дисциплиной.",
                    b: "Вы провели ночь на вечеринке, вернувшись лишь под утро. Тренер исключил вас из команды.",
                    c: "Вы засиделись в телефоне и легли спать поздно. На игре вы были не в лучшей форме."
                },
                badEnding: 'b'
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Юниорский турнир</h2>
                        <img src="images/tournament_18.jpeg" alt="Турнир">
                        <p class="game__text">Вам 18 лет. В юниорском турнире вы получаете мяч в центре поля. Как сыграете?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 2)">A) Паниковать и потерять мяч</button>
                            <button class="game__option" onclick="checkAnswer('b', 2)">B) Попробовать дальний удар</button>
                            <button class="game__option" onclick="checkAnswer('c', 2)">C) Сыграть в пас с партнёром</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: -3, teamwork: -3, health: -1 },
                    b: { skill: 2, teamwork: 1, health: 0 },
                    c: { skill: 0, teamwork: 0, health: 1 }
                },
                feedback: {
                    a: "Вы запаниковали и потеряли мяч. Тренер заменил вас и больше не видит в вас потенциала.",
                    b: "Вы пробили издали, но мяч ушёл мимо. Тренер отметил вашу смелость.",
                    c: "Вы сыграли в пас, но момент не был реализован."
                },
                badEnding: 'a'
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Первый контракт</h2>
                        <img src="images/contract_19.jpeg" alt="Контракт">
                        <p class="game__text">Вам 19 лет. Местный клуб предлагает вам первый профессиональный контракт, но с низкой зарплатой. Как поступите?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 3)">A) Подписать контракт</button>
                            <button class="game__option" onclick="checkAnswer('b', 3)">B) Ждать более выгодное предложение</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: 2, teamwork: 1, health: 0 },
                    b: { skill: -5, teamwork: -5, health: 0 }
                },
                feedback: {
                    a: "Вы подписали контракт и начали профессиональную карьеру. Тренер ценит вашу решимость.",
                    b: "Вы не получили выгодного предложения от других клубов, а местный клуб больше не нуждается в ваших услугах."
                },
                badEnding: 'b'
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Тренировка</h2>
                        <img src="images/injury_20.jpeg" alt="Травма">
                        <p class="game__text">Вам 20 лет. На тренировке вы чувствуете лёгкую боль в колене. Как поступите?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 4)">A) Игнорировать боль</button>
                            <button class="game__option" onclick="checkAnswer('b', 4)">B) Сказать тренеру</button>
                            <button class="game__option" onclick="checkAnswer('c', 4)">C) Попросить врача проверить</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: -5, teamwork: 0, health: -10 },
                    b: { skill: 0, teamwork: 1, health: 2 },
                    c: { skill: 0, teamwork: 0, health: 1 }
                },
                feedback: {
                    a: "Вы проигнорировали боль и усугубили травму. Вам провели успешную операцию, однако ваши навыки больше никогда не будут прежними.",
                    b: "Вы сказали тренеру о боли. Он рад, что вы были честны с ним и отправил вас к проверенному специалисту.",
                    c: "Врач проверил вас, и вы избежали травмы."
                }
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Матч с соперником</h2>
                        <img src="images/yellowcard_21.jpeg" alt="Фол">
                        <p class="game__text">Вам 21 год. В матче с заклятым соперником на вас нарушают правила. Что выберете?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 5)">A) Подняться и продолжить игру</button>
                            <button class="game__option" onclick="checkAnswer('b', 5)">B) Полезть в драку с обидчиком</button>
                            <button class="game__option" onclick="checkAnswer('c', 5)">C) Позвать врача</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: 1, teamwork: 2, health: -1 },
                    b: { skill: -6, teamwork: -4, health: -2 },
                    c: { skill: 0, teamwork: 1, health: 0 }
                },
                feedback: {
                    a: "Вы отделались ушибом, а затем ваша команда одержала победу.",
                    b: "Вы полезли в драку, получили красную карточку и подмочили репутацию, но остались в команде.",
                    c: "Врач говорит, что вы в порядке и можете продолжать игру."
                }
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Интервью</h2>
                        <img src="images/interview_22.jpeg" alt="Интервью">
                        <p class="game__text">Вам 22 года. После хорошей игры вас приглашают на интервью. Как ответите на вопрос о целях?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 6)">A) "Я не знаю"</button>
                            <button class="game__option" onclick="checkAnswer('b', 6)">B) "Хочу стать звездой!"</button>
                            <button class="game__option" onclick="checkAnswer('c', 6)">C) "Хочу помочь команде"</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: -1, teamwork: -2, health: -1 },
                    b: { skill: 2, teamwork: -1, health: 0 },
                    c: { skill: 0, teamwork: 2, health: 1 }
                },
                feedback: {
                    a: "Фанаты в недоумении.",
                    b: "Ваши амбиции вдохновили фанатов, но команда считает вас эгоистом.",
                    c: "Вы показали командный дух, и это укрепило ваши отношения."
                }
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Роль лидера</h2>
                        <img src="images/captain_23.jpeg" alt="Капитан">
                        <p class="game__text">Вам 23 года. Тренер говорит, что хочет заменить вас на более 'свежего' игрока. Как отреагируете?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 7)">A) Согласиться с тренером</button>
                            <button class="game__option" onclick="checkAnswer('b', 7)">B) Возразить</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: 1, teamwork: 2, health: 0 },
                    b: { skill: -5, teamwork: -5, health: 0 }
                },
                feedback: {
                    a: "Вышедший игрок забивает победный гол. Командные взаимоотношения улучшились.",
                    b: "Вы поссорились с тренером, и вас исключают из основного состава."
                },
                badEnding: 'b'
            },
            {
                question: `
                    <section class="game__question">
                        <h2>Матч за сборную</h2>
                        <img src="images/bench_24.jpeg" alt="Скамейка запасных">
                        <p class="game__text">Вам 24 года. В матче за кубок тренер просит вас сыграть в защите из-за дефицита игроков. Что выберете?</p>
                        <div class="game__items">
                            <button class="game__option" onclick="checkAnswer('a', 8)">A) Сыграть на позиции полузащитника</button>
                            <button class="game__option" onclick="checkAnswer('b', 8)">B) Сфокусироваться на атаке</button>
                            <button class="game__option" onclick="checkAnswer('c', 8)">C) Помочь в обороне</button>
                        </div>
                    </section>
                `,
                influence: {
                    a: { skill: -2, teamwork: 0, health: -5 },
                    b: { skill: 1, teamwork: -1, health: -1 },
                    c: { skill: 2, teamwork: 2, health: 1 }
                },
                feedback: {
                    a: "Вы оказались не готовы к такой нагрузке и надорвали мышцу.",
                    b: "Вы забили гол, но команда проиграла.",
                    c: "Вы отлично отыграли, команда выиграла кубок."
                }
            }
        ];

        let currentStep = 0;
        let influenceScores = { skill: 0, teamwork: 0, health: 15 }; // Начальное здоровье 15
        let playerAge = 16;
        let hasContract = false;

        function setGame(step) {
            const headerElement = document.querySelector('.game__header');
            const mainElement = document.querySelector('.game__main');
            
            if (!headerElement || !mainElement) return;

            headerElement.classList.add('hidden');
            mainElement.innerHTML = steps[step].question;
        }

        function checkAnswer(option, step) {
            const influences = steps[step].influence[option];
            const feedback = steps[step].feedback[option];
            const badEnding = steps[step].badEnding;

            const ageAtDecision = playerAge;

            influenceScores.skill += influences.skill;
            influenceScores.teamwork += influences.teamwork;
            influenceScores.health += influences.health;
            
            playerAge++;

            const mainElement = document.querySelector('.game__main');
            const questionElement = mainElement.querySelector('.game__question');
            questionElement.classList.add('hidden');

            const feedbackElement = document.createElement('div');
            feedbackElement.classList.add('feedback');
            feedbackElement.textContent = feedback;
            mainElement.appendChild(feedbackElement);

            // Проверка на контракт
            if (step === 3) {
                hasContract = option === 'a'; // Контракт подписан только при выборе 'a'
            }

            setTimeout(() => {
                feedbackElement.remove();
                if (influenceScores.health <= 0) {
                    showFinalScreen('healthFailure', ageAtDecision);
                } else if (badEnding && option === badEnding) {
                    showFinalScreen('badEnding', ageAtDecision);
                } else if (step === 3 && !hasContract) {
                    showFinalScreen('noContract', ageAtDecision);
                } else {
                    nextStep();
                }
            }, 2500);
        }

        function nextStep() {
            currentStep++;
            if (playerAge <= 24) {
                setGame(currentStep);
            } else {
                showFinalScreen('final', playerAge);
            }
        }

        function restartGame() {
            currentStep = 0;
            influenceScores = { skill: 0, teamwork: 0, health: 15 };
            playerAge = 16;
            hasContract = false;

            const headerElement = document.querySelector('.game__header');
            const mainElement = document.querySelector('.game__main');
            
            if (headerElement && mainElement) {
                headerElement.classList.remove('hidden');
                mainElement.innerHTML = `
                    <section class="game__intro">
                        <h2>Футбольная академия</h2>
                        <img src="images/academy_16.jpeg" alt="Молодой футболист в академии">
                        <p class="game__text">Вы — молодой футболист, мечтающий о большой карьере. Ваше путешествие начинается в местной академии...</p>
                        <button class="game__start-button" id="startGame">НАЧАТЬ КАРЬЕРУ!</button>
                    </section>
                `;

                const startButton = document.getElementById('startGame');
                if (startButton) {
                    startButton.addEventListener('click', () => setGame(currentStep));
                }
            }
        }

        function showFinalScreen(type, age) {
            const mainElement = document.querySelector('.game__main');
            let finalText = '';

            switch(type) {
                case 'badEnding':
                    if (age === 17) {
                        finalText = `В 17 лет ваша безответственность подвела вас. После провала на важной игре тренер исключил вас из команды, и вы завершили карьеру.`;
                    } else if (age === 18) {
                        finalText = `В 18 лет вы не справились с давлением на юниорском турнире. Тренер больше не видел в вас потенциала, и вы завершили карьеру.`;
                    } else if (age === 19) {
                        finalText = `В 19 лет вы не получили выгодный контракт и решили завершить карьеру.`;
                    } else if (age === 23) {
                        finalText = `В 23 года вы поссорились с тренером, отказавшись от замены. Вы продолжаете карьеру в другом клубе, но никогда не вернётесь на прежний уровень игры.`;
                    }
                    break;
                case 'healthFailure':
                    finalText = `В ${age} лет вы получили слишком много травм, и ваша карьера закончилась.`;
                    break;
                case 'noContract':
                    finalText = `В 19 лет вы отказались от контракта местного клуба и не получили других предложений. Ваша карьера закончилась.`;
                    break;
                case 'final':
                    if (influenceScores.skill >= 10 && influenceScores.teamwork >= 8 && influenceScores.health >= 10) {
                        finalText = `В 24 года вы перешли в топ-клуб! Ваша карьера достигла вершины, и впереди вас ждут большие победы!`;
                    } else if (influenceScores.skill >= 5 || influenceScores.teamwork >= 5) {
                        finalText = `В 24 года вы остались средним игроком. Вы не достигли вершин, но нашли своё место в футболе и радуете местных фанатов.`;
                    } else {
                        finalText = `В 24 года ваша карьера не сложилась. Вы остались в местном клубе, но не добились успеха.`;
                    }
                    break;
            }

            mainElement.innerHTML = `
                <section class="game__final">
                    <h2 class="game__text">${finalText}</h2>
                    <button class="game__option" id="restartButton">Начать заново</button>
                </section>
            `;

            const restartButton = document.getElementById('restartButton');
            if (restartButton) {
                restartButton.addEventListener('click', restartGame);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const startButton = document.getElementById('startGame');
            if (startButton) {
                startButton.addEventListener('click', () => setGame(currentStep));
            }
        });