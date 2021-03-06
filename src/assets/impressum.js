const impressum = {
  id: 'impressum',
  heading: 'Impressum / Datenschutz',

  points: [
    {
      heading: 'Angaben gemäß § 5 TMG',
      texts: [
        `Thomas Ehleringer<br>
        Öffentlich bestellter und vereidigter Sachverständiger<br>
        Lindenstraße 1<br>
        54597 Seiwerath<br>`,
      ],
      subPoints: [],
    },
    {
      heading: 'Kontakt',
      texts: [
        `Telefon: 06553/3177 <br>
        Telefax: 06553/901073 <br>
        E-Mail: Thomas@Ehleringer.de`,
      ],
      subPoints: [],
    },
    {
      heading: 'Umsatzsteuer-ID',
      texts: [
        `Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
        DE 179496121`,
      ],
      subPoints: [],
    },
    {
      heading: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
      texts: [
        `Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
      ],
      subPoints: [
        {
          heading: 'Haftung für Inhalte',
          texts: [
            'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
            'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
          ],
        },
        {
          heading: 'Haftung für Links',
          texts: [
            'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
            'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
          ],
        },
        {
          heading: 'Urheberrecht',
          texts: [
            'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
            'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
            `Quelle:<br>
              <a href="https://www.e-recht24.de">e-recht24.de</a>`,
            `<a href="${process.env.PUBLIC_URL}/assets/downloads/Datenschutzerklaerung.pdf" target="_blank">Datenschutzerklärung einsehen</a>`,
          ],
        },
      ],
    },
  ],
};

export default impressum;
