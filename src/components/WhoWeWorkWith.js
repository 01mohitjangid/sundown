import React from 'react';
import { SiNike } from 'react-icons/si';

function WhoWeWorkWith() {
  const brands = [
    {
      name: 'Nike',
      icon: SiNike,
      iconSize: 70,
      description: 'Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.'
    },
    {
      name: 'Converse',
      customLogo: React.createElement('div', {
        style: { 
          fontFamily: 'Arial, sans-serif',
          fontSize: '22px',
          fontWeight: '700',
          letterSpacing: '1px',
          color: '#000'
        }
      }, 'CONVERSE'),
      description: 'Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.'
    },
    {
      name: 'Arc\'teryx',
      customLogo: React.createElement('div', {
        style: { 
          fontFamily: 'Arial, sans-serif',
          fontSize: '22px',
          fontWeight: '700',
          letterSpacing: '0.5px',
          color: '#000'
        }
      }, 'ARC\'TERYX'),
      description: 'Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.'
    },
    {
      name: 'Hunter',
      customLogo: React.createElement('div', {
        style: { 
          border: '3px solid #000', 
          padding: '10px 20px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '22px',
          fontWeight: 'bold',
          letterSpacing: '3px',
          color: '#000'
        }
      }, 'HUNTER'),
      description: 'Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women\'s, Men\'s and Kid\'s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Ongoing production and design support for Hunter retail locations across the US.'
    }
  ];

  return React.createElement('div', {
    style: { 
      background: '#ede9e2', 
      width: '100vw', 
      minHeight: '100vh', 
      padding: '8vw 4vw' 
    }
  },
    React.createElement('div', {
      style: { maxWidth: '1400px', margin: '0 auto' }
    },
      // Header
      React.createElement('div', {
        className: 'mb-16'
      },
        React.createElement('h2', {
          className: 'flex items-center gap-3 text-xl md:text-2xl font-normal',
          style: { fontFamily: 'sans-serif', letterSpacing: '0.5px' }
        },
          React.createElement('span', {
            style: { 
              width: '8px', 
              height: '8px', 
              backgroundColor: '#ff4d00', 
              borderRadius: '50%',
              display: 'inline-block'
            }
          }),
          'WHO WE WORK WITH'
        )
      ),
      
      // Brand Cards Grid
      React.createElement('div', {
        className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      },
        brands.map((brand, index) => 
          React.createElement('div', {
            key: index,
            className: 'flex flex-col p-8 min-h-[400px]',
            style: {
              border: '1px solid #00000015',
              borderRadius: '8px',
              backgroundColor: '#ede9e2'
            }
          },
            // Logo
            React.createElement('div', {
              className: 'mb-8 h-20 flex items-center'
            },
              brand.icon 
                ? React.createElement(brand.icon, { 
                    size: brand.iconSize, 
                    color: '#000' 
                  })
                : brand.customLogo
            ),
            
            // Description
            React.createElement('p', {
              style: {
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#000',
                fontFamily: 'sans-serif',
                fontWeight: '400'
              }
            }, brand.description)
          )
        )
      )
    )
  );
}

export default WhoWeWorkWith;