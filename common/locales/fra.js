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
			video: "Pas de tutoriel vidéo disponible"
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

		userTaskRecord: ["Mes commandes", "Commandes de vente", "Commandes d'achat", "Statut actuel",
			"Commission obtenue", "Terminé"
		],
		withdrawlist: ["Historique des retraits"],
		withdraw: ["Nom de la banque", "IBAN", "Nom du titulaire du compte", "Montant du retrait",
			"Veuillez entrer le nom de la banque",
			"Veuillez entrer l'IBAN", "Veuillez entrer le nom du titulaire du compte",
			"Veuillez entrer le montant du retrait",
		],
		teamReport: {
			default: ["Liste d'équipe", "Total des membres de l'équipe"]
		},
		common2: ["Guide du débutant", "Contacter le service client", "Conditions du service, voir les détails",
			"Service client 1", "Service client 2"
		],
		common3: ["Succès", "Présentation de la plateforme"],
		invite: ["Partager et promouvoir", "Mon code d'invitation",
			"Copiez le code d'invitation pour inviter davantage d'amis à rejoindre", "Copier",
			"Impossible d'inviter des membres pour le moment"
		],
		common4: ["Authentification réelle", "Soumission réussie", "Remarques importantes", "Contenu des remarques",
			"Montant à régler", "Carte d'identité", "Preuve financière",
			"Veuillez d'abord effectuer la liaison du compte",
			"Veuillez d'abord effectuer l'authentification réelle"
		],
		common5: ["Vendre", "minutes", "avant", "Enregistrer le code QR", "Ouvrir",
			"Compte gelé, impossible de trader temporairement", "Téléchargement de l'application"
		],
		common6: ["Commandes de recharge", "Numéro de commande", "Montant", "Heure", "Statut"],
		hall2: ["Le montant minimum de la vente est de", "", "Le nombre de ventes dépasse la limite quotidienne"],
		register2: ["Email", "Téléphone", "Veuillez entrer le numéro de téléphone", "Code d'invitation",
			"Mot de passe de connexion", "Code de vérification", "Numéro de téléphone", "Inscription"
		],
		withdraw2: ["Retrait", "Compte du vendeur", "Solde du compte", "Montant à payer", "Payer maintenant",
			"Il y a encore des tâches non terminées, le retrait n'est pas autorisé pour le moment",
			"Le nombre de retraits quotidiens dépasse la limite", "Instructions supplémentaires"
		],
		mytask2: ["Compte du commerçant", "Prix", "Montant", "Solde du compte", "Montant à payer",
			"Heure de mise en correspondance", "Détails de la commande", "La quantité ne peut pas être 0",
			"Solde insuffisant", "Le prix ne peut pas être 0", "Erreur de plage"
		],
		taskOrder2: ["Vous avez des commandes en cours, vous ne pouvez pas annuler", "Solde insuffisant", "Confirmer",
			"Échec", "Vous devez terminer les commandes avant de pouvoir retirer:"
		],
		busAuth2: ["Mise à niveau vers un commerçant", "J'accepte", "Confirmer la mise à niveau",
			"Mise à niveau vers commerçant",
			"Veuillez contacter le service client pour modifier les informations bancaires",
			"Votre compte actuel doit être mis à niveau vers un compte de commerçant"
		],
		recharge2: ["Le montant ne peut pas être 0", "Une preuve de paiement doit être téléchargée"],
		buy3: ["Compte à rebours", "heures", "Type", "Commande de bien-être", "Commande de co-achat",
			"Nombre de participants limité", "Laisser vide pour aucune limite", "ID utilisateur spécifié",
			"Veuillez entrer l'ID spécifié"
		],
		hall3: ["jours", "heures", "minutes", "secondes", "Commande de co-achat", "Compte", "Expiré"],
		sell3: ["Le prix de vente ne peut pas être supérieur au meilleur prix"],
		busAuth3: ["Membre", "Commerçant", "Commerçant couronné"],
		recharge3: ["Calculer"],
		home3: ["Machine minière", "Pronostic", "Boîte mystère", "Investissement", "Bientôt disponible"],
		home4: ["Trading rapide", "Acheter USDT en un clic", "Trading C2C", "Acheter et vendre USDT",
			"Utilisateurs en ligne", "Volume total des transactions en 24 heures (USDT)"
		],
		common7: ["Si votre problème n'est pas résolu, veuillez contacter le service client en ligne",
			"Contacter le service client", "Cliquez pour obtenir des informations", "Paramètres",
			"Tout sélectionner", "Inviter des amis", "Nombre d'équipe", "Ajouts ce mois-ci", "Date d'inscription",
			"Nombre de subordonnés"
		],
		hall4: ["Votre identité", "Membre", "Vos informations de compte", "Transaction réussie",
			"Vous avez terminé la transaction avec succès", "Total", "Acheter", "Vendre"
		],
		task3: ["Tout", "Non payé", "Payé"],
		my: ["Confirmez-vous la déconnexion du compte ?"],

		bind: [
			'Associer un compte',
			'Pays/Région',
			'Nom de la banque',
			'IBAN',
			'Nom du titulaire du compte',
			'Prénom',
			'Nom de famille',
			'Adresse',
			'Code postal',
			'Ville',
			'Province/État',
			'Numéro de téléphone',
			'Veuillez contacter le service client pour modifier les informations bancaires',
			'Soumettre',
			'Veuillez entrer',
			'Tous les champs obligatoires ne sont pas remplis',
			'Association réussie'
		],

		setting: [
			"Mes annonces",
			"Commandes d'achat",
			"Commandes de vente",
		],
		empty: [
			"Aucune donnée disponible"
			]

		}
	}