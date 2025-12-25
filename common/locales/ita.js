// 意大利语
export default {
	common: {
		mixRecharge: ["Si prega di inserire l'indirizzo email"],
		language: "Lingua",
		common: ["Assistenza online", "Annulla", "Conferma", "Annulla"],
		upload: ["Caricamento in corso...", "Formato errato", "Caricamento avvenuto con successo", "Caricamento fallito"],
		vanPull: ["Non ci sono più dati", "Nessun dato"],
		login: {
		  text: ["Lingua", "BITCOIN", "Accedi"],
		  label: ["Accesso in corso...", "Accedi"],
		  placeholder: ["Inserisci l'indirizzo email", "Inserisci la password di accesso"],
		  default: ["Non hai un account?", "Registrati subito", "Hai dimenticato la password?", "Hai dimenticato la password di accesso"],
		  codes: ["Account non esistente", "Password non corretta", "Account bloccato", "Errore"]
		},
		register: {
		  text: ["BITCOIN", "Invio codice in corso...", "Ottieni", "Registrazione in corso...", "Registrati"],
		  placeholder: ["Inserisci l'indirizzo email", "Inserisci il codice di verifica", "Inserisci la password di accesso", "Conferma la password", "Inserisci il codice di invito", "Le password non coincidono", "Inserisci il codice di verifica", "Email non valida"],
		  label: ["Hai già un account? {a} {line}", "Torna al login"],
		  codes: ["Account già esistente", "Codice di verifica mancante", "Codice di verifica errato", "Le password non coincidono", "Referente non esistente", "Errore"]
		},
		resetpwd: ["Password dimenticata", "Inserisci l'indirizzo email", "Inserisci il codice di verifica", "Ottieni", "Inserisci la nuova password", "Reimposta la password"],
		footer: ["Home", "Hall", "Ordini", "Il mio"],
		home: {
		  confirm: "Conferma",
		  label: ["Benvenuto"],
		  broadcast: "Congratulazioni al membro {member} per diventare {grade}",
		  menu: ["Registro delle transazioni", "Guida per principianti", "Invita amici", "Assistenza online"],
		  noticeTitle: "Ultimi annunci",
		  msg: "Attività non disponibile",
		  video: "Video tutorial non disponibili",
		  hero: {
			title: "Il modo semplice per scambiare online",
			subtitle: "Muoviamo denaro a livello globale",
			description: "Aiutiamo aziende e individui a inviare e ricevere denaro in modo sicuro, senza le elevate commissioni bancarie.",
			credentials1: "25+ anni di esperienza, quotata alla ASX dal 2013",
			credentials2: "Regolamentata da oltre 50 autorità di controllo a livello mondiale",
			button: "INIZIA →"
		  }
		},
		hall: {
		  default: ["Hall delle transazioni", "Saldo", "Acquista", "Vendi", "Conferma vendita", "Elenco ordini", "Ordini di vendita", "Vendita ai commercianti", "In attesa", "Compra", "Vendi ora"],
		  list: ["Quantità", "Prezzo", "Non concluso", "Vendi USDT", "Inserisci quantità di USDT", "Importo ricevuto", "Limite", "Compra USDT", "Importo speso"],
		  kbip: ["Annulla", "Importo superato", "Deve essere nell'intervallo di importo"]
		},
		msglist: ["Elenco messaggi"],
		sell: {
		  placeholder: ["Inserisci il prezzo di vendita", "Inserisci la quantità di vendita"],
		  label: ["Saldo (USDT)", "Nome", "Numero di conto bancario", "Prezzo attuale (USDT)", "Miglior prezzo di vendita", "Prezzo di vendita", "Quantità di vendita", "Miglior prezzo", "Tutto", "Conferma vendita"]
		},
		buy: {
		  placeholder: ["Inserisci il prezzo di acquisto", "Inserisci la quantità di acquisto", "Importo minimo", "Importo massimo"],
		  label: ["Saldo (USDT)", "Nome", "Numero di conto bancario", "Prezzo attuale (USDT)", "Miglior prezzo di acquisto", "Prezzo di acquisto", "Quantità di acquisto", "Miglior prezzo", "Tutto", "Conferma acquisto", "Limite"]
		},
		user: {
		  default: ["Area personale", "Accedi", "Codice invito", "Esci", "Saldo", "Punti", "Portafoglio"],
		  menu: ["I miei asset", "Elenco squadra", "Associa account", "Dettagli account", "Presentazione piattaforma", "Esci"]
		},
		bindAccount: {
		  default: ["Associa account", "Invia"],
		  fields: ["Nome intestatario", "Numero di telefono", "Numero di conto bancario", "Nome della banca", "Tipo", "Indirizzo USDT"],
		  placeholder: ["Inserisci il nome dell'intestatario", "Inserisci il numero di telefono", "Inserisci il numero di conto bancario", "Inserisci il nome della banca", "Seleziona il tipo di USDT", "Inserisci l'indirizzo USDT"]
		},
		bindAccount2: ["Assicurati di inserire correttamente le informazioni, in caso contrario potrebbe influire sulle transazioni normali", "Associa ora"],
		wallet: {
		  default: ["I miei asset", "Deposito", "Prelievo", "Registro depositi", "Registro prelievi", "Importo depositato", "Importo venduto", "Guadagni totali", "Saldo account", "Saldo", "Importo deposito (USDT)", "Importo venduto",
		    "Guadagni totali", "Aggiorna a account commerciante", "Aggiorna a account commerciante, contatta l'assistenza", "Conferma registrazione come commerciante", "Certificazione commerciante", "Importo da pagare", "Certificato di pagamento", "Deposito di garanzia commerciante", "Certificazione immediata", "Informazioni", "Importo da pagare",
		    "Saldo insufficiente, effettuare un deposito?"
		  ],
		  label: ["Metodo di prelievo", "Importo del prelievo", "Password finanziaria", "Invia", "Numero di telefono", "Indirizzo email", "IFSC", "Conferma"],
		  placeholder: ["Seleziona il metodo di prelievo", "Inserisci l'importo del prelievo", "Inserisci la password finanziaria", "Seleziona il metodo di prelievo", "Inserisci il numero di telefono del beneficiario", "Inserisci l'indirizzo email del beneficiario", "Inserisci l'IFSC del beneficiario"],
		  msg: ["Non hai ancora impostato la password finanziaria, impostala prima", "Non hai ancora associato un account PIX, associane uno prima", "Sei sicuro di voler prelevare?"]
		},
		recharge4: ["Per la sicurezza dei tuoi fondi, dopo aver effettuato il trasferimento, invia lo screenshot del trasferimento completato per l'approvazione!"],
		recharge: {
		  default: ["Ricarica portafoglio", "Ricarica portafoglio anticipata", "Metodo di ricarica", "Ricarica", "Conferma"],
		  label: ["Categoria", "Indirizzo", "Importo ricarica", "Inserisci importo", "Carica prova di pagamento", "Copiato con successo", "Ricarica su piattaforma anticipata"],
		  placeholder: ["Categoria", "Indirizzo"],
		  info: ["Importo ricarica", "Numero ordine", "Banca beneficiaria", "Conto beneficiario", "Beneficiario", "Copia"]
		},
		task: {
		  tabs: ["Tutti", "Elenco vendite", "Scaduti", "Completati", "In attesa di pagamento del commerciante", "In attesa di conferma"],
		  default: ["Elenco ordini"],
		  msg: ["Invia per revisione", "Inviato, attendi la revisione", "Invio fallito, invia nuovamente"]
		},
		userInfo: {
		  default: ["Informazioni personali", "Avatar", "Account", "Email", "Alipay", "Informazioni dettagliate", "Modifica password", "Password finanziaria", "Clicca per impostare", "Modifica avatar", "Modifica password di accesso", "Modifica password finanziaria", "Invia",
		    "Svuota cache", "Visualizza informazioni", "Nickname", "Codice di invito"
		  ],
		  label: ["Vecchia password di accesso", "Nuova password di accesso", "Conferma password", "Vecchia password finanziaria", "Nuova password finanziaria", "Conferma password", "Salva"],
		  placeholder: ["Inserisci la vecchia password di accesso", "Inserisci la nuova password di accesso", "Conferma la password di accesso", "Inserisci la vecchia password finanziaria", "Inserisci la nuova password finanziaria", "Conferma la password finanziaria"]
		},
		fundRecord: {
		  default: ["Registro spese", "Registro ricariche", "Registro asset", "Ric.", "Entr.", "Usc."],
		  tabs: ["Entrate", "Uscite", "Ricariche"]
		},
		dialog: ["Avviso", "Conferma", "Invio in corso...", "Copia riuscita", "La versione di iOS è troppo bassa e non è supportata", "Registrazione in corso...", "Caricamento dati..."],
		serviceCenter: ["Centro assistenza", "Ciao, sono il tuo assistente dedicato~", "Sono qui per aiutarti", "Servizio self-service", "Assistenza online", "Assistenza ricariche", "Assistenza Line"],
		userTaskRecord: ["I miei ordini", "Ordini venduti", "Ordini acquistati", "Stato attuale", "Commissione guadagnata", "Completato"],
		withdrawlist: ["Registro prelievi"],
		teamReport: {
		  default: ["Elenco squadra"]
		},
		common2: ["Guida per principianti", "Contatta il servizio clienti", "Termini del servizio, visualizza dettagli", "Servizio clienti 1", "Servizio clienti 2"],
		common3: ["Successo", "Presentazione della piattaforma"],
		invite: ["Condividi e promuovi", "Il mio codice di invito", "Copia il codice di invito per invitare più amici", "Copia", "Impossibile invitare membri al momento"],
		common4: ["Verifica dell'identità", "Invio riuscito", "Avvertenze", "Contenuto dell'avvertenza", "Importo da pagare", "Documento d'identità", "Documento finanziario", "Completa prima il collegamento dell'account", "Completa prima la verifica dell'identità"],
		common5: ["Vendi", "minuti", "fa", "Salva il codice QR", "Apri", "Account bloccato, impossibile effettuare transazioni al momento", "Download dell'app"],
		common6: ["Ordini di ricarica", "Numero dell'ordine", "Importo", "Data", "Stato"],
		hall2: ["L'importo minimo di vendita è", "", "Numero di vendite superato il limite giornaliero"],
		register2: ["Registrazione tramite email", "Registrazione tramite cellulare", "Inserisci il numero di cellulare"],
		withdraw2: ["Prelievo", "Account del venditore", "Saldo dell'account", "Importo da pagare", "Paga ora", "Ci sono ancora attività da completare, impossibile prelevare al momento", "Limite giornaliero di prelievi superato", "Note"],
		mytask2: ["Account commerciante", "Prezzo", "Importo", "Saldo dell'account", "Importo da pagare", "Orario di abbinamento", "Dettagli dell'ordine", "La quantità non può essere zero", "Saldo insufficiente", "Il prezzo non può essere zero", "Intervallo errato"],
		taskOrder2: ["Hai ancora ordini non completati, impossibile annullare", "Saldo insufficiente", "Conferma", "Fallito", "Devi completare gli ordini prima di prelevare:"],
		busAuth2: ["Aggiornamento a commerciante", "Accetto", "Conferma l'aggiornamento", "Aggiornamento a commerciante", "Se devi modificare le informazioni della carta bancaria, contatta il servizio clienti", "Il tuo account attuale deve essere aggiornato a un account commerciante"],
		recharge2: ["L'importo non può essere zero", "È necessario caricare uno screenshot"],
		buy3: ["Conto alla rovescia", "ore", "Tipo", "Ordine bonus", "Ordine di vendita in comune", "Numero massimo", "Se non inserisci un numero, non ci sarà un limite", "ID utente specifico", "Inserisci l'ID specifico"],
		hall3: ["Giorni", "ore", "minuti", "secondi", "Ordine di vendita in comune", "Account", "Scaduto"],
		sell3: ["Il prezzo di vendita non può essere superiore al prezzo migliore"],
		busAuth3: ["Membro", "Commerciante", "Commerciante di alto livello"],
		recharge3: ["Calcola"],
		home3: ["Miniera", "Scommesse", "Scatola misteriosa", "Investimenti", "In arrivo"],
		home4: ["Trading rapido", "Acquista USDT con un clic", "Trading C2C", "Acquista e vendi USDT", "Utenti online", "Volume di trading delle ultime 24 ore (USDT)"],
		common7: ["Se non riesci a risolvere il tuo problema, contatta il servizio clienti online", "Contatta il servizio clienti", "Clicca per consultare", "Impostazioni", "Tutti", "Invita amici", "Numero di squadra", "Nuovi aggiunti questo mese", "Data di registrazione", "Numero di sottoposti"],
		hall4: ["La tua identità", "Membro", "Informazioni del tuo account", "Transazione completata con successo", "Hai completato con successo", "Prezzo totale", "Acquista", "Vendi"],
		task3: ["Tutti", "Non pagato", "Pagato"],
		my: ["Sei sicuro di voler uscire dal tuo account?"],
		index: {
			title: "DEX:OFX",
			subtitle: "USDT viene convertito in valuta legale",
			intro: "Per gli utenti in molte aree, è un problema comune non poter acquistare facilmente USDT (valuta stabile) a causa di canali di pagamento limitati, restrizioni bancarie, sorveglianza locale o mancanza di exchange conformi. DEX:OFX offre un modo sicuro, conforme e altamente liquido per aiutare gli utenti a convertire agevolmente gli asset digitali in valuta legale locale.",
			suitableUsersTitle: "Primo, quali utenti sono adatti?",
			suitableUsersIntro: "Il meccanismo di exchange di valuta legale DEX:OFX è particolarmente adatto ai seguenti gruppi:",
			suitableUsers: [
				"Le banche locali proibiscono o limitano l'acquisto di criptovalute.",
				"Le carte di credito/debito non possono acquistare USDT sull'exchange.",
				"L'exchange locale manca di liquidità USDT.",
				"Vogliono evitare KYC complicati o costose formalità.",
				"Vogliono convertire rapidamente gli asset digitali in valuta legale locale (EUR, CAD, USD, SGD, CHF, ecc.)."
			],
			coreFeaturesTitle: "Secondo, DEX: la funzione core di OFX",
			coreFeatures: [
				{
					title: "Exchange USDT → Valuta legale",
					content: "Gli utenti possono trasferire USDT all'indirizzo wallet designato di DEX:OFX, e il sistema convertirà automaticamente in valuta legale designata secondo il tasso di cambio in tempo reale, e completterà il trasferimento attraverso la rete finanziaria cooperativa.",
					supportedCurrenciesTitle: "La valuta legale supportata include (ma non è limitata a):",
					supportedCurrencies: [
						"USD dollari",
						"HKD dollari hongkonghesi",
						"SGD dollari di Singapore",
						"TWD dollari taiwanesi",
						"EUR euro",
						"AUD dollari australiani"
					]
				},
				{
					title: "Nessun account exchange richiesto.",
					content: "Non è necessaria alcuna exchange centralizzata come coinbase-crypto.com. Riduciamo la soglia, soprattutto per gli utenti che non possono registrarsi all'exchange."
				},
				{
					title: "Capacità di ricevimento internazionale transfrontaliero",
					content: "Sfruttando la rete di pagamenti transfrontalieri globale di OFX, possiamo realizzare pagamenti rapidi;",
					transferTime: [
						"Trasferimento nello stesso paese: stesso giorno o 1 giorno lavorativo",
						"Bonifico internazionale: 1-3 giorni lavorativi",
						"(a seconda della banca regionale)"
					]
				},
				{
					title: "Tasso di cambio trasparente e commissioni basse.",
					content: "L'exchange adotta il prezzo di mercato in tempo reale, e la commissione è fissa e trasparente, evitando di nascondere le commissioni."
				}
			],
			exchangeProcessTitle: "III. Esempio di processo di exchange",
			exchangeProcessIntro: "Ecco il processo di exchange generale (può essere adattato secondo le tue esigenze commerciali):",
			exchangeProcess: [
				{
					title: "Inviare una richiesta di exchange",
					steps: [
						"L'utente seleziona la valuta legale, l'importo e la banca ricevente.",
						"Il sistema genera l'indirizzo di ricezione USDT (TRC20 o ERC20).",
						"L'utente effettua il trasferimento di USDT o altra criptovaluta."
					]
				},
				{
					title: "DEX:OFX esegue l'exchange",
					steps: ["Il sistema converte il prezzo di exchange nella valuta legale richiesta in tempo reale."]
				},
				{
					title: "Valuta legale sul conto",
					steps: ["Bonifico sul conto utente attraverso la rete finanziaria internazionale o il sistema bancario locale."]
				}
			],
			whyCantBuyTitle: "4. Perché molte persone non possono acquistare USDT?",
			whyCantBuyReasons: [
				"La banca non permette la categoria di \"transazione di criptovalute\"",
				"Le compagnie di carte di credito bloccano gli acquisti di criptovalute.",
				"Restrizioni normativa locali",
				"L'exchange richiede un KYC elevato",
				"Le commissioni di prelievo dell'exchange sono elevate.",
				"Non ci sono canali di distribuzione di valute stabili nel territorio.",
				"Alcuni paesi non hanno exchange di criptovalute legali."
			],
			valueProposition: "Il valore di Dex:OFX è aiutare queste persone a superare le barriere finanziarie e ad usare direttamente la valuta legale.",
			safetyTitle: "V. Sicurezza e supervisione (concentrandosi sull'aumento della fiducia)",
			safetyIntro: "Basato sul concetto del sistema OFX, mette l'accento sulla supervisione, la conformità e il processo trasparente.",
			safetyFeatures: [
				"Tutti i flussi di capitale sono stati verificati tramite AML e KYC.",
				"La banca ricevente dell'utente necessita di essere verificata.",
				"Tutto il processo è tracciabile e verificabile."
			],
			regions: {
				europe: "Europa",
				unitedStates: "Stati Uniti",
				canada: "Canada",
				singapore: "Singapore",
				switzerland: "Svizzera",
				unitedKingdom: "Regno Unito"
			},
			infoCards: [
				{
					title: "Facile da usare",
					description: "Scambia valute da oltre 150 paesi online"
				},
				{
					title: "Trasferimenti veloci e affidabili",
					description: "Scambio istantaneo con tariffe di mercato in tempo reale"
				},
				{
					title: "Affidabile e sicuro",
					description: "Istituzione P2P autorizzata e regolamentata"
				}
			]
		},
		navbar: {
			inviteCode: "Codice di invito",
			copy: "Copia",
			creditScore: "Punteggio di credito",
			totalBalance: "Bilancio totale",
			eurBalance: "EUR Balance",
			currencyExchange: "Conversione valuta",
			memberLevel: "Livello membro",
			promotions: "Promozioni",
			aboutUs: "Chi siamo",
			faqs: "FAQ",
			certification: "Certificazione",
			recharge: "Ricarica",
			bankCards: "Carte bancarie",
			records: "Registri",
			withdraw: "Prelievo",
			contactUs: "Contattaci",
			inviteFriends: "Invita amici",
			logout: "Esci"
		},
		exchange: {
			infoCard: {
				totalOrders: "Ordini totali",
				totalProfit: "Profitto totale",
				totalBalance: "Bilancio totale",
				processing: "In elaborazione",
				orders: "Ordini",
				confirmExchange: "Conferma scambio",
				records: "Registri",
				selectCurrency: "Seleziona valuta"
			},
			modal: {
				steps: [
					"Abbina ordine",
					"In elaborazione",
					"Scambiato"
				],
				percentage: "(100%)",
				exchangedCurrency: "Valuta scambiata",
				exchangedRate: "Tasso di cambio",
				exchangedAmount: "Importo scambiato",
				exchangeEarnings: "Guadagno dallo scambio",
				orderType: "Tipo di ordine",
				expectedReturn: "Ritorno previsto",
				close: "Chiudi"
			}
		},
		order: {
			recordsTitle: "Registri",
			tabs: {
				all: "Tutti",
				pending: "In attesa",
				completed: "Completato",
				limitOrder: "Ordine limite"
			},
			status: {
				completed: "Completato",
				pending: "In attesa",
				processing: "In elaborazione"
			},
			details: {
				orderId: "ID Ordine",
				orderType: "Tipo di ordine",
				exchangeCurrency: "Valuta scambiata",
				exchangeEarnings: "Guadagno dallo scambio",
				expectedReturn: "Ritorno previsto"
			}
		}
	},
	faqs: {
		pageHeader: {
			title: "Regole e Regolamenti",
			description: "Guida alla Piattaforma e Informazioni sul Trading"
		},
		basicRules: {
			title: "Regole di Base",
			rules: [
				"Ogni account utilizza un solo numero di cellulare per la registrazione.",
				"Secondo le normative FinCEN, ogni utente deve avere almeno $100 nel proprio account per eseguire ordini.",
				"Ogni gruppo di attività può contenere da 0 a 4 ordini limite, e ogni ordine limite può contenere fino a 2 ordini di cambio (cioè 1 ordine cambia 2 volte). Solo 1 attività contenente 2 cambi è consentita per gruppo.",
				"Gli account che superano un certo importo di deposito saranno automaticamente aggiornati al livello di membership SVIP. I membri aggiornati possono completare 40 ordini per turno."
			]
		},
		platformOperation: {
			title: "Funzionamento della Piattaforma",
			rules: [
				"La piattaforma è aperta ogni giorno dalle 10:00 alle 23:00. I membri possono effettuare ordini solo in questi orari.",
				"Se il tuo account viene abusato da terzi, contatta immediatamente il servizio clienti.",
				"I prelievi superiori a $30000 richiedono una notifica preventiva al servizio clienti.",
				"I punteggi di credito vengono aggiornati dopo le 22:30 ogni sera. I prelievi non sono possibili quando il punteggio di credito è inferiore a 95 punti."
			]
		},
		orderTypes: {
			title: "Tipi di Ordine",
			marketOrder: {
				title: "Ordine a Mercato",
				description: "Gli utenti della piattaforma di cambio valuta accettano il miglior tasso di cambio disponibile sul mercato corrente e completano immediatamente lo scambio. Il sistema assegna automaticamente gli ordini in base al saldo disponibile dell'account del membro. La commissione per questo tipo di ordine è pari all'1% dell'importo dell'ordine."
			},
			limitOrder: {
				title: "Ordine Limite",
				description: "Gli utenti della piattaforma di cambio valuta possono impostare un tasso di cambio obiettivo. Una volta che il tasso di mercato raggiunge il valore specificato, il sistema abbina automaticamente ed esegue lo scambio. Questi ordini di solito superano il saldo corrente dell'account dell'agente ma offrono un potenziale di rendimento più elevato. La commissione per questo tipo di ordine è compresa tra il 5% e il 60% dell'importo dell'ordine."
			}
		},
		giftPackage: {
			title: "Pacchetto Regalo",
			description: [
				"I pacchetti regalo sono offerte esclusive per i nostri preziosi membri. Contengono un ordine casuale associato a ordini limite o denaro generosamente fornito dai nostri partner. Questa offerta speciale si applica ai membri che hanno accumulato un certo importo nel loro account. I pacchetti regalo sono offerti solo da 0 a 4 volte per turno.",
				"I pacchetti regalo sono progettati per premiare la nostra comunità fedele e migliorare la tua esperienza con noi. Raggiungere questa soglia ti consente non solo di ottenere premi attraenti ma anche di far parte di un gruppo esclusivo con benefici aggiuntivi."
			]
		},
		deposits: {
			title: "Depositi",
			description: [
				"Tutti i depositi devono essere coordinati tramite il servizio clienti online della piattaforma. Dopo aver trasferito i fondi sull'account designato dal servizio clienti, inviare le ricevute di pagamento per garantire un'elaborazione tempestiva.",
				"Per evitare ritardi, confermare i dettagli del proprio account direttamente sulla piattaforma prima di ogni transazione, poiché questi possono cambiare periodicamente. Se si incontrano problemi durante il processo di deposito, contattare immediatamente il servizio clienti."
			]
		},
		withdrawals: {
			title: "Prelievi",
			description: [
				"I membri possono richiedere prelievi solo dopo aver completato tutte le attività quotidiane designate. I fondi guadagnati sulla piattaforma possono essere prelevati quando vengono soddisfatte le condizioni di prelievo della piattaforma. Prima di richiedere un prelievo, assicurarsi che l'account della piattaforma contenga un indirizzo wallet valido.",
				"Nota: I prelievi possono essere effettuati quotidianamente dalle 10:00 alle 23:00."
			]
		}
	},
	vip: {
		title: "Livello di membership",
		current: "Attuale",
		deposit: "Deposito",
		bonus: "Bonus",
		commissionRate: "Tasso di commissione",
		dailyOrders: "Ordini settimanali",
		description: "Dichiarazione del livello VIP:\n" +
			"La vendita di USDT consente di guadagnare sulla differenza di prezzo, che è essenzialmente un’attività di fornitura di liquidità.\n" +
			"Il livello VIP limita il numero di transazioni per evitare che gli account ordinari occupino lo spazio dei market maker professionali e per ridurre la pressione del controllo del rischio della piattaforma.\n" +
			"Pressione AML e normativa! (motivo principale)\n" +
			"Pertanto, la piattaforma utilizza:\n" +
			"Livello VIP\n" +
			"Numero di transazioni\n" +
			"Soglia dell’importo delle transazioni\n" +
			"Per selezionare gli utenti:\n" +
			"Gli utenti ordinari effettuano cambi occasionali.\n" +
			"La vendita frequente di USDT è considerata un’attività professionale di cambio o di fornitura di liquidità.\n" +
			"VIP = oggetto di controllo del rischio gestibile (maggiore affidabilità per la piattaforma)\n" +
			"Gli utenti VIP di solito hanno:\n" +
			"Maggiore volume di capitale\n" +
			"KYC più completo\n" +
			"Storico delle transazioni più lungo\n" +
			"\n" +
			"La logica della piattaforma è:\n" +
			"La limitazione del numero di vendite di USDT è dovuta al fatto che si tratta già di un comportamento ad alta frequenza di cambio e liquidità, che richiede un livello più elevato per soddisfare la supervisione normativa.\n" +
			"I requisiti di controllo del rischio non sono difficoltà della piattaforma, ma una progettazione di conformità normativa orientata al mercato.\n" +
			"\n" +
			"Suggerimenti:\n" +
			"Le differenze di prezzo di USDT possono generare profitti, ma si tratta di un \"comportamento quasi finanziario\". La restrizione del livello VIP non è una soglia, ma un messaggio della piattaforma:\n" +
			"Non sei più un utente ordinario."
	},
	about: {
		title: "Chi siamo",
		companyDescription: "Fondata nel 2001, OFX è un'azienda multinazionale di tecnologia finanziaria che si concentra sui trasferimenti di capitale globale e sui servizi valutari. L'azienda nasce da un concetto chiaro: fornire soluzioni di capitale transfrontaliere migliori, più eque ed efficienti per i clienti globali. Dalla sua fondazione, OFX ha servito oltre 1 milione di clienti, ha supportato oltre 50 valute, ha coperto oltre 170 paesi e mercati ed ha gestito oltre 1,48 bilioni di dollari statunitensi in fondi accumulati.",
		globalNetworkTitle: "Struttura della rete globale",
		globalNetworkDesc: "Possiede uffici a Londra, Dublino, Sydney, Auckland, Hong Kong, Singapore, Toronto e San Francisco, con oltre 700 dipendenti in tutto il mondo, e dispone di una solida rete operativa e capacità di servizio localizzate.",
		regulatoryAdvantageTitle: "Vantaggio regolatorio forte",
		regulatoryAdvantageDesc: "È supervisionata da oltre 50 agenzie di regolamentazione in tutto il mondo e segue rigorosi standard di revisione finanziaria e conformità. Dalla quotazione in borsa, non vi sono state sanzioni regolatorie né azioni di applicazione della legge, e la capacità di gestione del rischio è solida.",
		corporateGovernanceTitle: "Governance aziendale e gestione",
		corporateGovernanceDesc1: "Il consiglio di amministrazione è composto da leader aziendali con ricca esperienza nel settore bancario, finanziario e tecnologico per garantire una struttura di governance aziendale solida.",
		corporateGovernanceDesc2: "Il team manageriale è composto da dirigenti senior di importanti banche internazionali, fornitori di servizi di pagamento e aziende tecnologiche, guidati dall'amministratore delegato Skander Malcolm, e continua a promuovere l'espansione strategica e l'innovazione digitale di OFX.",
		listingStatusTitle: "Stato di quotazione e attributi industriali",
		listingStatusDesc: "OFX è stata quotata alla Borsa Australiana (ASX) nel 2013 (codice azionario: OFX) ed è stata classificata come \"Finanza Diversificata\". L'azienda mantiene una forte competitività nell'industria della fintech transfrontaliera con un quadro di conformità stabile, una struttura internazionale e un modello di profitto sostenibile.",
		aboutDexOfxTitle: "Informazioni su \"DEX:OFX\"",
		aboutDexOfxDesc1: "Dal 10 marzo 2023, alcune piattaforme di informazione finanziaria hanno visualizzato l'etichetta \"DEX:OFX\".",
		aboutDexOfxDesc2: "È necessario chiarire che:",
		aboutDexOfxDesc3: "\"Dex: OFX\" non è un codice di transazione reale. È un identificatore di mappatura tra mercati che viene generato automaticamente durante l'aggiornamento del sistema su alcune piattaforme dati.",
		aboutDexOfxDesc4: "L'identificatore è stato generato come parte dei test interni del sistema per verificare la capacità della piattaforma di associare correttamente le informazioni dell'azienda in diversi mercati. Pertanto, l'etichetta viene utilizzata solo per scopi di indicizzazione e test dei dati e non significa che OFX sia quotata su DEX o qualsiasi altra borsa.",
		aboutDexOfxDesc5: "L'unica quotazione ufficiale valida di OFX è: Borsa Australiana (ASX) Codice azionario: OFX",
		aboutDexOfxDesc6: "Tutti gli altri identificatori (incluso \"DEX:OFX\") sono voci di mappatura generate dal sistema, che non vengono utilizzate per transazioni reali e forniscono solo servizi migliori per gli utenti.",
		headquartersTitle: "Indirizzo della sede del Gruppo OFX",
		headquartersDesc: "Piano 19, 60 Margaret Street, Sydney NSW 2000, Australia"
	},
	bindTrc20: {
		formTitle: "Informazioni di ricarica",
		moneyLabel: "Importo della ricarica",
		moneyPlaceholder: "Inserisci l'importo della ricarica",
		addressLabel: "Indirizzo di ricarica",
		addressPlaceholder: "Inserisci l'indirizzo di ricarica",
		hashLabel: "Hash della ricarica",
		hashPlaceholder: "Inserisci l'hash della ricarica",
		submitButton: "Invia ricarica",
		successMessage: "Ricarica inviata con successo",
		failMessage: "Invio fallito",
		networkErrorMessage: "Errore di rete"
	},
		
		bankCardList: {
			formTitle: "Informazioni Bancarie",
			accountNameLabel: "Nome del Titolare del Conto",
			accountNamePlaceholder: "Inserisci il nome del titolare del conto",
			accountNumberLabel: "Numero del Conto",
			accountNumberPlaceholder: "Inserisci il numero del conto",
			bankNameLabel: "Nome della Banca",
			bankNamePlaceholder: "Inserisci il nome della banca",
			countryLabel: "Paese",
			countryPlaceholder: "Seleziona il paese",
			routingNumberLabel: "Numero di Routing",
			routingNumberPlaceholder: "Inserisci il numero di routing",
			swiftCodeLabel: "Codice SWIFT",
			swiftCodePlaceholder: "Inserisci il codice SWIFT",
			bankAddressLabel: "Indirizzo della Banca",
			bankAddressPlaceholder: "Inserisci l'indirizzo della banca",
			submitButtonText: "Salva Informazioni",
			bindSuccess: "Collegamento riuscito",
			updateSuccess: "Aggiornamento riuscito"
		},
		deposit: {
			withdrawal: "Prelievo",
			history: "Cronologia",
			submit: "Invia",
			enterWithdrawalAmount: "Inserisci l'importo del prelievo",
			withdrawalFailed: "Prelievo fallito, riprova più tardi"
		},
		withdrawalStatus: {
			pending: "In attesa di revisione",
			success: "Pagamento effettuato",
			rejected: "Respinto",
			processing: "Elaborazione pagamento"
		}
	}