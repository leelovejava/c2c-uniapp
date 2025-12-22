export default {
	common: {
		mixRecharge: ["Veuillez entrer votre adresse e-mail"],
		language: "Langue",
		common: ["Service client en ligne", "Désactiver la flottaison", "Confirmer", "Annuler"],
		upload: ["Téléchargement en cours...", "Format incorrect", "Téléchargement réussi", "Échec du téléchargement"],
		vanPull: ["Plus de données disponibles", "Aucune donnée"],
		login: {
			text: ["Langue", "BITCOIN", "Connexion"],
			label: ["Connexion en cours...", "Connexion immédiate"],
			placeholder: ["Veuillez entrer votre adresse e-mail", "Veuillez entrer votre mot de passe de connexion"],
			default: ["Pas de compte ?", "Inscrivez-vous maintenant", "Mot de passe oublié ?",
				"Oublié votre mot de passe de connexion"
			],
			codes: ["Compte inexistant", "Mot de passe incorrect", "Compte gelé", "Échec"]
		},
		register: {
			text: ["BITCOIN", "Envoi du code de vérification...", "Cliquez pour obtenir", "Inscription en cours...",
				"Inscrivez-vous maintenant"
			],
			placeholder: ["Veuillez entrer votre adresse e-mail", "Veuillez entrer le code de vérification",
				"Veuillez entrer un mot de passe de connexion", "Veuillez confirmer votre mot de passe",
				"Veuillez entrer le code d'invitation", "Les mots de passe ne correspondent pas",
				"Veuillez entrer le code de vérification", "Adresse e-mail invalide",
				"Le mot de passe doit contenir au moins 6 caractères"
			],
			label: ["Déjà inscrit ? {a} {line}", "Retour à la connexion"],
			codes: ["Compte déjà existant", "Aucun code de vérification", "Code de vérification incorrect",
				"Les mots de passe ne correspondent pas", "Parrain inexistant", "Échec"
			]
		},
		resetpwd: ["Mot de passe oublié", "Veuillez entrer votre adresse e-mail",
			"Veuillez entrer le code de vérification", "Cliquez pour obtenir", "Veuillez entrer votre mot de passe",
			"Réinitialiser le mot de passe"
		],
		footer: ["Accueil", "Hall", "Commandes", "Profil"],
		home: {
			label: ["Bienvenue"],
			broadcast: "Félicitations au membre {member} pour son nouveau grade {grade}",
		menu: ["Journal des transactions", "Guide du débutant", "Inscription par invitation", "Service client"],
		noticeTitle: "Dernières annonces",
		msg: "Tâche non disponible",
		video: "Pas de tutoriel vidéo disponible",
		hero: {
			title: "La façon facile d'échanger en ligne",
			subtitle: "Nous déplaçons de l'argent à l'échelle mondiale",
			description: "Nous aidons les entreprises et les particuliers à envoyer et recevoir de l'argent en toute sécurité, sans frais bancaires excessifs.",
			credentials1: "+25 ans d'expérience, coté à l'ASX depuis 2013",
			credentials2: "Réglementé par plus de 50 autorités de régulation dans le monde",
			button: "COMMENCER →"
		}
		},
		hall: {
			default: ["Hall des transactions", "Solde", "Acheter", "Vendre", "Confirmer la vente",
				"Liste des commandes", "Commandes de vente", "Vendre aux commerçants", "En attente", "Acheter",
				"Vendre maintenant"
			],
			list: ["Quantité", "Prix unitaire", "Non conclu", "Vendre USDT", "Veuillez entrer la quantité de USDT",
				"Montant obtenu", "Limite", "Acheter USDT", "Montant dépensé"
			],
			kbip: ["Annuler", "Montant dépassé", "Doit être dans la plage de montant"]
		},
		msglist: ["Liste des messages"],
		sell: {
			placeholder: ["Veuillez entrer le prix de vente", "Veuillez entrer la quantité de vente"],
			label: ["Solde (USDT)", "Nom", "Numéro de compte bancaire", "Prix actuel (USDT)", "Meilleur prix de vente",
				"Prix de vente", "Quantité de vente", "Meilleur prix", "Tout", "Confirmer la vente"
			]
		},
		buy: {
			placeholder: ["Veuillez entrer le prix d'achat", "Veuillez entrer la quantité d'achat", "Montant minimum",
				"Montant maximum"
			],
			label: ["Solde (USDT)", "Nom", "Numéro de compte bancaire", "Prix actuel (USDT)", "Meilleur prix d'achat",
				"Prix d'achat", "Quantité d'achat", "Meilleur prix", "Tout", "Confirmer l'achat", "Limite"
			]
		},
		user: {
			default: ["Espace personnel", "Identifiant de connexion", "Code d'invitation", "Déconnexion", "Solde",
				"Gold", "Portefeuille",
				"Portefeuille d'intérêt",
				"Gains totaux",
				"Montant des recharges",
				"Montant des ventes",
				"Détails",
				"Veuillez entrer le montant d'achat",
				"Annuler",
				"Confirmer",
				"Achat réussi",
				"Montant",
				"Date d'échéance",
				"Taux d'intérêt",
				"Durée",
				"Jours"
			],
			menu: ["Mes actifs", "Liste d'équipe", "Lier le compte", "Déclaration de compte",
				"Présentation de la plateforme", "Déconnexion"
			]


		},
		bindAccount: {
			default: ["Lier un compte", "Soumettre"],
			fields: ["Nom du titulaire du compte", "Numéro de téléphone", "Numéro de compte bancaire",
				"Nom de la banque", "Type", "Adresse USDT"
			],
			placeholder: ["Veuillez entrer le nom du titulaire du compte", "Veuillez entrer le numéro de téléphone",
				"Veuillez entrer le numéro de compte bancaire", "Veuillez entrer le nom de la banque",
				"Veuillez sélectionner le type de USDT", "Veuillez entrer l'adresse USDT"
			]
		},
		bindAccount2: [
			"Veuillez confirmer que les informations sont correctes, sinon cela affectera les transactions normales",
			"Lier maintenant"
		],
		wallet: {
			default: ["Mes actifs", "Recharge", "Retrait", "Historique de recharge", "Historique de retrait",
				"Montant déjà rechargé", "Montant déjà vendu", "Bénéfices déjà obtenus", "Solde du compte", "Solde",
				"Montant de la recharge (USDT)", "Montant de la vente",
				"Total des bénéfices", "Passer au statut de commerçant",
				"Veuillez contacter le service client pour passer au statut de commerçant",
				"Confirmer l'installation en tant que commerçant", "Authentification du commerçant",
				"Vous devez payer", "Justificatif de paiement", "Dépôt de garantie du commerçant",
				"Authentifier immédiatement", "Information", "Vous devez payer",
				"Solde insuffisant, voulez-vous recharger"
			],
			label: ["Méthode de retrait", "Montant du retrait", "Mot de passe financier", "Soumettre",
				"Numéro de téléphone", "Email", "IFSC", "Confirmer"
			],
			placeholder: ["Choisir la méthode de retrait", "Veuillez entrer le montant du retrait",
				"Veuillez entrer le mot de passe financier", "Veuillez choisir la méthode de retrait",
				"Veuillez entrer le numéro de téléphone du bénéficiaire",
				"Veuillez entrer l'adresse email du bénéficiaire", "Veuillez entrer l'IFSC du bénéficiaire"
			],
			msg: ["Vous n'avez pas encore défini de mot de passe financier, veuillez le définir d'abord",
				"Vous n'avez pas encore lié de compte PIX, veuillez le lier d'abord",
				"Voulez-vous vraiment retirer ?"
			]
		},
		recharge4: [
			"Pour votre sécurité financière, veuillez soumettre une capture d'écran de votre transfert réussi pour vérification !"
		],
		recharge: {
			default: ["Recharge de portefeuille", "Pré-recharge de portefeuille", "Méthode de recharge", "Recharge",
				"Confirmer"
			],
			label: ["Catégorie", "Adresse", "Montant de la recharge", "Montant à entrer",
				"Télécharger le document justificatif", "Copié avec succès", "Pré-recharge à la bourse"
			],
			placeholder: ["Catégorie", "Adresse"],
			info: ["Montant de la recharge", "Numéro de commande", "Banque bénéficiaire",
				"Numéro de compte bénéficiaire", "Bénéficiaire", "Copier"
			]
		},
		task: {
			tabs: ["Tout", "Liste des ventes", "Expiré", "Terminé", "En attente de paiement du commerçant",
				"En attente de confirmation"
			],
			default: ["Liste des commandes", "Numéro de commande", "Compte du commerçant", "Quantité", "Prix",
				"Montant", "Statut", "Heure de mise en correspondance", "En cours", "Terminé", "Annulé", "Tout"
			],
			msg: ["Soumettre pour vérification", "Soumis, veuillez attendre la vérification",
				"Échec de la soumission, veuillez soumettre à nouveau"
			],
		},
		userInfo: {
			default: ["Informations personnelles", "Avatar", "Compte", "Email", "Alipay", "Informations détaillées",
				"Modifier le mot de passe", "Mot de passe financier", "Cliquez pour paramétrer",
				"Modifier l'avatar", "Modifier le mot de passe de connexion", "Modifier le mot de passe financier",
				"Soumettre",
				"Vider le cache", "Voir les informations", "Pseudonyme", "Code de parrainage", "Changer de langue"
			],
			label: ["Ancien mot de passe de connexion", "Nouveau mot de passe de connexion",
				"Confirmer le mot de passe", "Ancien mot de passe financier", "Nouveau mot de passe financier",
				"Confirmer le mot de passe", "Enregistrer", "Modification réussie"
			],
			placeholder: ["Veuillez entrer l'ancien mot de passe de connexion",
				"Veuillez entrer le nouveau mot de passe de connexion",
				"Veuillez confirmer le mot de passe de connexion",
				"Veuillez entrer l'ancien mot de passe financier",
				"Veuillez entrer le nouveau mot de passe financier", "Veuillez confirmer le mot de passe financier"
			]
		},
		fundRecord: {
			default: ["Historique des dépenses", "Historique des recharges", "Journal des actifs", "Dépôt", "Reçu",
				"Dépense"
			],
			tabs: ["Revenus", "Dépenses", "Recharges"]
		},
		dialog: ["Message", "Confirmer", "Soumission en cours...", "Copie réussie",
			"La version iOS est trop basse et n'est pas prise en charge", "Inscription en cours...",
			"Chargement des données en cours..."
		],
		serviceCenter: ["Centre de service client", "Bonjour, je suis votre service client dédié~",
			"Je suis ravi de vous aider", "Service automatique", "Service client en ligne",
			"Service client pour les recharges", "Service client Line", "Passer au statut de commerçant",
			"Veuillez contacter le service client pour passer au statut de commerçant !",
			"Contacter le service client"
		],
		
		userTaskRecord: ["Mes commandes", "Commandes de vente", "Commandes d'achat", "État actuel",
			"Commission gagnée", "Terminé"
		],
		withdrawlist: ["Historique des retraits"],
		withdraw: ["Nom de la banque", "IBAN", "Nom du compte", "Montant du retrait",
			"Veuillez entrer le nom de la banque",
			"Veuillez entrer l'IBAN", "Veuillez entrer le nom du compte",
			"Veuillez entrer le montant du retrait"
		],
		teamReport: {
			default: ["Liste d'équipe", "Nombre total de membres de l'équipe"]
		},
		common2: ["Guide du débutant", "Contacter le service client",
			"Conditions générales de service, voir les détails", "Service client 1", "Service client 2"
		],
		common3: ["Succès", "Présentation de la plateforme"],
		invite: {
			share: "Partager et promouvoir",
			myInviteCode: "Mon code d'invitation",
			copyInviteText: "Copier le code d'invitation pour inviter plus d'amis",
			copy: "Copier",
			unableToInvite: "Impossible d'inviter des membres pour le moment",
			inviteCodeLabel: "Code d'invitation :",
			copyInviteLink: "Cliquer pour copier le lien d'invitation"
		},
		common4: ["Authentification de nom réel", "Soumis avec succès", "Remarques importantes",
			"Contenu de l'article", "Montant à payer", "Carte d'identité", "Preuve financière",
			"Veuillez d'abord terminer la liaison du compte",
			"Veuillez d'abord terminer l'authentification de nom réel"
		],
		common5: ["Vendre", "minutes", "avant", "Enregistrer le code QR", "Ouvrir",
			"Compte gelé, impossible de trader temporairement", "Télécharger l'application"
		],
		common6: ["Commandes de recharge", "Numéro de commande", "Montant", "Temps", "Statut"],
		hall2: ["Le montant minimum de vente est", "", "Nombre de ventes dépassant la limite quotidienne"],
		register2: ["Email", "Téléphone", "Veuillez entrer le numéro de téléphone", "Code d'invitation",
			"Mot de passe de connexion", "Code de vérification", "Numéro de téléphone", "S'inscrire"
		],
		withdraw2: ["Retrait", "Compte du vendeur", "Solde du compte", "Montant à payer", "Payer maintenant",
			"Impossible de retirer car des tâches sont incomplètes",
			"Nombre de retraits quotidiens dépassé", "Remarques"
		],
		mytask2: ["Compte du commerçant", "Prix", "Montant", "Solde du compte", "Montant à payer",
			"Heure de mise en correspondance", "Détails de la commande", "La quantité ne peut pas être 0",
			"Solde insuffisant", "Le prix ne peut pas être 0", "Erreur de plage"
		],
		taskOrder2: ["Vous avez des ordres non exécutés, impossible d'annuler", "Solde insuffisant", "Confirmer",
			"Échec",
			"Vous devez encore terminer des commandes avant de pouvoir retirer :"
		],
		busAuth2: ["Passer au statut de commerçant", "J'accepte", "Confirmer la mise à niveau",
			"Passer au statut de commerçant",
			"Veuillez contacter le service client pour modifier les informations de carte bancaire",
			"Le compte actuel doit être mis à niveau vers un compte commerçant"
		],
		recharge2: ["Le montant ne peut pas être 0", "Il faut obligatoirement télécharger une capture d'écran"],
		buy3: ["Compte à rebours", "heures", "Type", "Commande de bien-être", "Commande groupée", "Restriction de nombre",
			"Laisser vide pour aucune restriction", "ID utilisateur spécifié", "Veuillez entrer l'ID spécifié"
		],
		hall3: ["Jours", "heures", "minutes", "secondes", "Commandes groupées", "Compte", "Expiré"],
		sell3: ["Le prix de vente ne peut pas être supérieur au meilleur prix"],
		busAuth3: ["Membre", "Commerçant", "Commerçant couronné"],
		recharge3: ["Calculer"],
		home3: ["Mineur", "Devine", "Boîte mystère", "Gestion de patrimoine", "À venir"],
		home4: ["Transactions rapides", "Acheter USDT en un clic", "Transaction C2C", "Acheter et vendre USDT",
			"Utilisateurs en ligne", "Volume total des transactions sur 24h (USDT)"
		],
		common7: [
			"Si votre problème n'est pas résolu, veuillez contacter le service client en ligne",
			"Contacter le service client", "Cliquer pour consulter", "Paramètres", "Tout", "Inviter des amis",
			"Taille de l'équipe", "Ajouts ce mois-ci", "Date d'inscription", "Nombre de subordonnés"
		],
		hall4: ["Votre identité", "Membre", "Informations de votre compte", "Transaction réussie",
			"Vous avez terminé avec succès", "Prix total", "Acheter", "Vendre"
		],
		task3: ["Tout", "Impayé", "Payé"],
		my: ["Êtes-vous sûr de vouloir vous déconnecter ?"],

		bind: [
			'Liaison de compte',
			'Pays/Région',
			'Nom de la banque',
			'IBAN',
			'Nom du compte',
			'Prénom',
			'Nom',
			'Adresse',
			'Code postal',
			'Ville',
			'État/Province',
			'Numéro de téléphone',
			'Veuillez contacter le service client pour modifier les informations de carte bancaire',
			'Contacter le service client',
			'Soumettre',
			'Veuillez entrer',
			'Des champs obligatoires ne sont pas remplis',
			'Liaison réussie'
		],

		setting: [
			"Mes enregistrements de publication",
			"Commandes d'achat",
			"Commandes de vente",
		],
		empty: [
			"Aucune donnée"
		],
		index: {
			title: "DEX:OFX",
			subtitle: "Conversion de l'USDT en monnaie fiduciaire",
			intro: "Pour les utilisateurs de nombreuses régions, il s'agit d'un problème courant de ne pas pouvoir acheter facilement de l'USDT (monnaie stable) en raison de canaux de paiement limités, de restrictions bancaires, de réglementation locale ou d'absence d'échanges conformes. DEX:OFX offre un moyen sûr, conforme et très liquide pour aider les utilisateurs à convertir efficacement leurs actifs numériques en monnaie fiduciaire locale.",
			suitableUsersTitle: "Premièrement, quels utilisateurs conviennent ?",
			suitableUsersIntro: "Le mécanisme d'échange de monnaie fiduciaire de DEX:OFX convient particulièrement aux groupes suivants :",
			suitableUsers: [
				"Les banques locales interdisent ou restreignent l'achat de cryptomonnaies.",
				"Les cartes de crédit/débit ne peuvent pas acheter d'USDT sur l'échange.",
				"L'échange local manque de liquidité en USDT.",
				"Souhaitez éviter un KYC complexe ou des frais élevés.",
				"Souhaitez convertir rapidement les actifs numériques en monnaie fiduciaire locale (EUR, CAD, USD, SGD, CHF, etc.)."
			],
			coreFeaturesTitle: "Deuxièmement, les fonctionnalités principales de DEX:OFX",
			coreFeatures: [
				{
					title: "Échange USDT → monnaie fiduciaire",
					content: "Les utilisateurs peuvent transférer de l'USDT vers l'adresse de portefeuille désignée de DEX:OFX, le système convertira automatiquement en monnaie fiduciaire désignée selon le taux de change en temps réel, et effectuera le transfert via le réseau financier partenaire.",
					supportedCurrenciesTitle: "Les monnaies fiduciaires prises en charge incluent (mais ne se limitent pas à) :",
					supportedCurrencies: [
						"Dollar américain USD",
						"Dollar de Hong Kong HKD",
						"Dollar de Singapour SGD",
						"Nouveau dollar de Taïwan TWD",
						"Euro EUR",
						"Dollar australien AUD"
					]
				},
				{
					title: "Aucun compte d'échange requis",
					content: "Aucun compte d'échange centralisé tel que coinbase-crypto.com n'est requis. Abaisse le seuil, en particulier pour les utilisateurs qui ne peuvent pas s'inscrire à des échanges."
				},
				{
					title: "Capacité de collecte transfrontalière mondiale",
					content: "S'appuyant sur le réseau de paiement transfrontalier mondial d'OFX pour réaliser des arrivages rapides ;",
					transferTime: [
						"Transfert dans le même pays : le jour même ou 1 jour ouvrable",
						"Virement international : 1 à 3 jours ouvrables",
						"(selon les banques régionales)"
					]
				},
				{
					title: "Taux de change transparent, frais faibles",
					content: "Adopte le prix du marché en temps réel pour l'échange, frais fixes et transparents, évitant les frais cachés."
				}
			],
			exchangeProcessTitle: "Troisièmement, exemple de processus d'échange",
			exchangeProcessIntro: "Voici un processus d'échange général (ajustable selon les besoins commerciaux) :",
			exchangeProcess: [
				{
					title: "Soumettre une demande d'échange",
					steps: [
						"Les utilisateurs sélectionnent la monnaie fiduciaire, le montant et la banque destinataire.",
						"Le système génère une adresse de collecte USDT (TRC20 ou ERC20).",
						"Les utilisateurs transfèrent vers l'USDT ou d'autres cryptomonnaies."
					]
				},
				{
					title: "DEX:OFX exécute l'échange",
					steps: ["Le système convertit le prix d'échange en monnaie fiduciaire requise en temps réel."]
				},
				{
					title: "Arrivée de la monnaie fiduciaire",
					steps: ["Transfert vers le compte de l'utilisateur via le réseau financier international ou le système bancaire local."]
				}
			],
			whyCantBuyTitle: "Quatrièmement, pourquoi beaucoup ne peuvent-ils pas acheter d'USDT ?",
			whyCantBuyReasons: [
				"Les banques n'autorisent pas les catégories de transactions de cryptomonnaies",
				"Les sociétés de cartes de crédit bloquent les achats de crypto.",
				"Restrictions réglementaires locales",
				"Les échanges exigent un KYC élevé",
				"Frais de retrait élevés des échanges.",
				"Il n'y a pas de canal de distribution de stablecoins localement.",
				"Certains pays n'ont pas d'échanges de crypto légaux."
			],
			valueProposition: "La valeur de Dex:OFX réside dans l'aide qu'elle apporte à ces personnes pour franchir les obstacles financiers et utiliser directement l'argent fiduciaire.",
			safetyTitle: "Cinquièmement, Sécurité et Réglementation (Accent sur l'Augmentation de la Confiance)",
			safetyIntro: "Basé sur le concept du système OFX, soulignant la réglementation, la conformité et les processus transparents.",
			safetyFeatures: [
				"Tous les flux de capitaux sont soumis à des audits AML et KYC.",
				"La banque destinataire de l'utilisateur doit être vérifiée.",
				"L'ensemble du processus est traçable et vérifiable."
			],
			regions: {
				europe: "Europe",
				unitedStates: "États-Unis",
				canada: "Canada",
				singapore: "Singapour",
				switzerland: "Suisse",
				unitedKingdom: "Royaume-Uni"
			},
			infoCards: [
				{
					title: "Facile à utiliser",
					description: "Échange en ligne de devises de plus de 150 pays"
				},
				{
					title: "Transferts rapides et fiables",
					description: "Échange instantané au taux de change du marché en temps réel"
				},
				{
					title: "Digne de confiance et sécurisé",
					description: "Institutions P2P autorisées et réglementées"
				}
			]
		},
		exchange: {
			infoCard: {
				totalOrders: "Total des commandes",
				totalProfit: "Bénéfice total",
				totalBalance: "Solde total",
				processing: "Traitement en cours",
				orders: "Commandes",
				confirmExchange: "Confirmer l'échange",
				records: "Enregistrements"
			},
			modal: {
				steps: [
					"Mettre en correspondance les commandes",
					"Traitement en cours",
					"Échangé"
				],
				percentage: "(100%)",
				exchangedCurrency: "Monnaie échangée",
				exchangedRate: "Taux d'échange",
				exchangedAmount: "Montant échangé",
				exchangeEarnings: "Gains d'échange",
				orderType: "Type de commande",
				expectedReturn: "Retour attendu",
				close: "Fermer"
			}
		},
		order: {
			recordsTitle: "Enregistrements",
			tabs: {
				all: "Tout",
				pending: "En attente",
				completed: "Terminé",
				limitOrder: "Ordre à cours limité"
			},
			status: {
				completed: "Terminé",
				pending: "En attente",
				processing: "Traitement en cours"
			},
			details: {
				orderId: "ID de commande",
				orderType: "Type de commande",
				exchangeCurrency: "Monnaie d'échange",
				exchangeEarnings: "Gains d'échange",
				expectedReturn: "Retour attendu"
			}
		},
		navbar: {
			inviteCode: "Code d'invitation",
			copy: "Copier",
			creditScore: "Score de crédit",
			totalBalance: "Solde total",
			currencyExchange: "Échange de devises",
			memberLevel: "Niveau de membre",
			promotions: "Promotions",
			aboutUs: "À propos de nous",
			faqs: "FAQ",
			certification: "Certification",
			recharge: "Recharger",
			bankCards: "Cartes bancaires",
			records: "Enregistrements",
			withdraw: "Retirer",
			contactUs: "Nous contacter",
			inviteFriends: "Inviter des amis",
			logout: "Se déconnecter",
			copySuccess: "Copie réussie",
			copyFailed: "Échec de la copie"
		},
		support: {
			title: "Nous contacter",
			serviceTime: "Heures de service : 10h00 - 23h00 tous les jours",
			buttonText: "Équipe de soutien OFX"
		}
	},
	faqs: {
		pageHeader: {
			title: "Règles et réglementations",
			description: "Guide de la plateforme et informations commerciales"
		},
		basicRules: {
			title: "Règles de base",
			rules: [
				"Chaque compte ne peut être enregistré qu'avec un seul numéro de téléphone portable.",
				"Selon les réglementations de FinCEN, chaque utilisateur doit avoir au moins 100 $ dans son compte pour exécuter des ordres.",
				"Chaque groupe de tâches contient jusqu'à 0-4 ordres à cours limité, chaque ordre à cours limité pouvant contenir jusqu'à 2 ordres d'échange (c'est-à-dire 1 ordre échangé 2 fois). Un seul ordre contenant 2 échanges est autorisé à être exécuté par groupe.",
				"Les comptes dont le montant des dépôts dépasse un certain seuil seront automatiquement mis à niveau vers le statut de membre SVIP. Les membres mis à niveau peuvent effectuer 40 ordres par tour."
			]
		},
		platformOperation: {
			title: "Fonctionnement de la plateforme",
			rules: [
				"La plateforme est ouverte quotidiennement de 10h00 à 23h00. Les membres ne peuvent passer des ordres que durant ces heures.",
				"Si votre compte est abusé par un tiers, veuillez contacter immédiatement le service client.",
				"Les retraits supérieurs à 30 000 $ nécessitent une notification préalable au service client.",
				"Les scores de crédit sont mis à jour après 22h30 chaque soir. Les retraits ne peuvent être effectués lorsque le score de crédit est inférieur à 95."
			]
		},
		orderTypes: {
			title: "Types d'ordres",
			marketOrder: {
				title: "Ordre au marché",
				description: "Les utilisateurs de la plateforme de change acceptent le meilleur taux de change disponible sur le marché actuel et finalisent l'échange immédiatement. Le système attribue automatiquement les ordres en fonction du solde disponible du compte du membre. La commission pour ce type d'ordre est de 1 % du montant de l'ordre."
			},
			limitOrder: {
				title: "Ordre à cours limité",
				description: "Les utilisateurs de la plateforme de change peuvent définir des taux de change cibles. Une fois que le taux de change du marché atteint la valeur spécifiée, le système mettra automatiquement en correspondance et exécutera l'échange. Ces ordres dépassent généralement le solde actuel du compte de l'agent, mais offrent un potentiel de rendement plus élevé. La commission pour ce type d'ordre est de 5 % à 60 % du montant de l'ordre."
			}
		},
		giftPackage: {
			title: "Colis cadeau",
			description: [
				"Les colis cadeaux sont des offres exclusives pour nos membres précieux. Ils contiennent un ordre aléatoire associé à des ordres à cours limité ou à de l'argent généreusement fourni par nos partenaires. Cette offre spéciale s'applique aux membres ayant accumulé un certain montant dans leur compte. Les colis cadeaux ne sont offerts que 0 à 4 fois par tour.",
				"Les colis cadeaux sont conçus pour récompenser notre communauté fidèle et améliorer votre expérience avec nous. Atteindre ce seuil vous permet non seulement de recevoir des récompenses attractives, mais aussi de faire partie d'un groupe exclusif avec des avantages supplémentaires."
			]
		},
		deposits: {
			title: "Dépôts",
			description: [
				"Tous les dépôts doivent être coordonnés via le service client en ligne de la plateforme. Après avoir transféré des fonds sur le compte désigné par le service client, veuillez soumettre des justificatifs de paiement pour assurer un traitement rapide.",
				"Pour éviter les retards, veuillez confirmer vos coordonnées directement sur la plateforme avant chaque transaction, car celles-ci peuvent changer périodiquement. Si vous rencontrez des problèmes lors du processus de dépôt, veuillez contacter immédiatement le service client."
			]
		},
		withdrawals: {
			title: "Retraits",
			description: [
				"Les membres ne peuvent demander des retraits qu'après avoir terminé toutes les tâches quotidiennes désignées. Les fonds gagnés sur la plateforme peuvent être retirés lorsque les conditions de retrait de la plateforme sont remplies. Avant de demander un retrait, veuillez vous assurer que votre compte de plateforme contient une adresse de portefeuille valide.",
				"Remarque : Les retraits peuvent être effectués quotidiennement de 10h00 à 23h00."
			]
		}
	},
	vip: {
		title: "Niveau de membre",
		current: "Actuel",
		deposit: "Dépôt",
		bonus: "Prime",
		commissionRate: "Taux de commission",
		dailyOrders: "Ordres quotidiens",
		description: "Déclaration de niveau VIP :\n" +
			"Vendre de l'USDT permet de gagner sur l'écart, essentiellement en faisant du \"commerce de liquidité\"\n" +
			"Le niveau VIP limite le nombre de transactions pour empêcher les comptes ordinaires d'occuper l'espace des teneurs de marché professionnels, tout en réduisant les risques de contrôle des risques de la plateforme.\n" +
			"Anti-blanchiment (AML) et pression réglementaire ! (La raison principale)\n" +
			"Par conséquent, la plateforme utilise :\n" +
			"Niveau VIP\n" +
			"Nombre de transactions\n" +
			"Seuil de montant de transaction\n" +
			"pour filtrer les utilisateurs :\n" +
			"Utilisateurs ordinaires qui échangent occasionnellement de l'argent\n" +
			"Vendeurs fréquents d'USDT soupçonnés de change/commerçants professionnels fournisseurs de liquidité\n" +
			"VIP=objets contrôlés par gestion des risques (la plateforme se sent plus rassurée)\n" +
			"Les utilisateurs VIP possèdent généralement :\n" +
			"Plus de capital\n" +
			"KYC plus complet\n" +
			"Historique de transactions plus long\n" +
			"\n" +
			"La logique de la plateforme est :\n" +
			"La plateforme limite le nombre de ventes d'USDT parce que cela constitue déjà un comportement de change fréquent et de liquidité, nécessitant un niveau supérieur pour répondre aux exigences de\n" +
			"réglementation et de contrôle des risques, ce n'est pas que la plateforme soit difficile, mais plutôt une conception conforme à la réglementation orientée marché.\n" +
			"\n" +
			"Rappel amical :\n" +
			"Les écarts d'USDT peuvent rapporter de l'argent, mais c'est un \"comportement quasi-financier\". Les restrictions de niveau VIP ne sont pas des seuils, mais la plateforme vous dit :\n" +
			"\"Vous n'êtes plus un utilisateur ordinaire.\""
	},
	deposit: {
		withdrawal: "Retrait",
		history: "Historique",
		totalBalance: "Solde total",
		processingTime: "Le traitement du retrait prend 15 à 20 minutes.",
		walletAddressType: "Type d'adresse de portefeuille",
		trc20Address: "Adresse TRC20",
		erc20Address: "Adresse ERC20",
		btcAddress: "Adresse BTC",
		addressNotSet: "Adresse non définie",
		bindAddress: "Lier l'adresse",
		verifyWalletAddress: "Veuillez vérifier attentivement votre adresse de portefeuille.",
		enterWithdrawalAmount: "Entrez le montant du retrait",
		all: "Tout",
		enterWithdrawalPassword: "Entrez le mot de passe de retrait",
		submit: "Soumettre",
		enterWithdrawalAmount: "Veuillez saisir le montant du retrait",
		withdrawalFailed: "Échec du retrait, veuillez réessayer plus tard"
	},
	withdrawalStatus: {
		pending: "En attente de vérification",
		success: "Paiement effectué",
		rejected: "Rejeté",
		processing: "Traitement du paiement"
	},
	about: {
		title: "À propos de nous",
		companyDescription: "OFX a été fondée en 2001 et est une société technologique financière multinationale spécialisée dans le transfert de capitaux mondiaux et les services de change. L'entreprise découle d'un concept clair : fournir aux clients mondiaux de meilleures solutions de capitaux transfrontaliers plus justes et plus efficaces. Depuis sa création, OFX a servi plus d'un million de clients, prenant en charge plus de 50 devises, couvrant plus de 170 pays et marchés, et traitant cumulativement des fonds dépassant 1 480 milliards de dollars américains.",
		globalNetworkTitle: "Disposition du réseau mondial",
		globalNetworkDesc: "L'entreprise dispose de bureaux à Londres, Dublin, Sydney, Auckland, Hong Kong, Singapour, Toronto et San Francisco, avec plus de 700 employés dans le monde, possédant un réseau opérationnel solide et des capacités de service localisées.",
		regulatoryAdvantageTitle: "Avantages réglementaires puissants",
		regulatoryAdvantageDesc: "L'entreprise est supervisée par plus de 50 organismes de régulation dans le monde, suivant des normes strictes d'audit financier et de conformité. Depuis son introduction en bourse, il n'y a eu aucune sanction réglementaire ni action d'application, indiquant des capacités de gestion des risques saines.",
		corporateGovernanceTitle: "Gouvernance d'entreprise et direction",
		corporateGovernanceDesc1: "Le conseil d'administration est composé de chefs d'entreprise possédant une vaste expérience dans les domaines bancaires, financiers et technologiques, assurant une structure de gouvernance d'entreprise saine.",
		corporateGovernanceDesc2: "L'équipe de direction comprend des cadres supérieurs provenant de grandes banques internationales, de fournisseurs de services de paiement et de sociétés technologiques, dirigée par le PDG Skander Malcolm, poursuivant continuellement l'expansion stratégique et l'innovation numérique d'OFX.",
		listingStatusTitle: "Statut de cotation et attributs industriels",
		listingStatusDesc: "OFX a été cotée à la Bourse australienne (ASX) en 2013 (code boursier : OFX), classée comme \"Finance diversifiée\". L'entreprise maintient une forte compétitivité dans l'industrie de la fintech transfrontalière grâce à son cadre de conformité stable, à sa disposition internationale et à son modèle de rentabilité durable.",
		aboutDexOfxTitle: "À propos de \"DEX:OFX\"",
		aboutDexOfxDesc1: "Depuis le 10 mars 2023, certaines plateformes d'information financière affichent l'étiquette \"DEX:OFX\".",
		aboutDexOfxDesc2: "Il faut clarifier que :",
		aboutDexOfxDesc3: "\"Dex : OFX\" n'est pas un code de négociation réel. Il s'agit d'un identifiant de mappage intermarchés généré automatiquement pendant les mises à jour du système sur certaines plateformes de données.",
		aboutDexOfxDesc4: "Cet identifiant est généré dans le cadre de tests internes du système pour vérifier la capacité de la plateforme à associer correctement les informations de l'entreprise dans différents marchés. Par conséquent, cette étiquette est uniquement utilisée à des fins d'indexation et de test des données, et ne signifie pas que OFX est cotée sur DEX ou toute autre bourse.",
		aboutDexOfxDesc5: "La seule cotisation officielle valide d'OFX est : Bourse australienne (ASX) code boursier : OFX",
		aboutDexOfxDesc6: "Tous les autres identifiants (y compris \"DEX:OFX\") sont des entrées de mappage générées par le système, non utilisées pour le commerce réel, uniquement pour fournir un meilleur service aux utilisateurs.",
		headquartersTitle: "Adresse du siège du groupe OFX",
		headquartersDesc: "19ème étage, 60 Margaret Street, Sydney, Nouvelle-Galles du Sud, Australie, Code postal 2000"
	},
	
	bindTrc20: {
		formTitle: "Informations de recharge",
		moneyLabel: "Montant de la recharge",
		moneyPlaceholder: "Veuillez entrer le montant de la recharge",
		addressLabel: "Adresse de recharge",
		addressPlaceholder: "Veuillez entrer l'adresse de recharge",
		hashLabel: "Hash de recharge",
		hashPlaceholder: "Veuillez entrer le hash de recharge",
		submitButton: "Soumettre la recharge",
		successMessage: "Soumission de recharge réussie",
		failMessage: "Échec de la soumission",
		networkErrorMessage: "Erreur réseau"
	},
	bankCardList: {
		formTitle: "Informations bancaires",
		accountNameLabel: "Nom du compte",
		accountNamePlaceholder: "Veuillez entrer le nom du compte",
		accountNumberLabel: "Numéro de compte",
		accountNumberPlaceholder: "Veuillez entrer le numéro de compte",
		bankNameLabel: "Nom de la banque",
		bankNamePlaceholder: "Veuillez entrer le nom de la banque",
		countryLabel: "Pays",
		countryPlaceholder: "Veuillez sélectionner le pays",
		routingNumberLabel: "Numéro de routage",
		routingNumberPlaceholder: "Veuillez entrer le numéro de routage",
		swiftCodeLabel: "Code SWIFT",
		swiftCodePlaceholder: "Veuillez entrer le code SWIFT",
		bankAddressLabel: "Adresse bancaire",
		bankAddressPlaceholder: "Veuillez entrer l'adresse bancaire",
		submitButtonText: "Enregistrer les informations",
		bindSuccess: "Liaison réussie",
		updateSuccess: "Mise à jour réussie"
	},
	// Internationalisation liée à l'authentification de nom réel
	certification: {
		title: "Demander l'authentification de nom réel",
		subtitle: "Veuillez remplir vos vraies informations pour terminer l'authentification",
		successTitle: "Vous avez terminé l'authentification de nom réel",
		successSubtitle: "Pas besoin de soumettre à nouveau les informations d'authentification",
		nameLabel: "Nom réel",
		emailLabel: "Adresse e-mail",
		phoneLabel: "Numéro de téléphone",
		namePlaceholder: "Veuillez entrer votre vrai nom",
		emailPlaceholder: "Veuillez entrer votre adresse e-mail",
		phonePlaceholder: "Veuillez entrer votre numéro de téléphone",
		submitButton: "Soumettre l'authentification",
		statusPending: "En cours de révision",
		statusSuccess: "Révision réussie",
		statusFailed: "Révision échouée"
	}
}