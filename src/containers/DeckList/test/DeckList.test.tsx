import { DeckList, mapStateToProps, organizeCards } from '../../DeckList/DeckList'
import React from 'react'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DeckListState } from '../DeckList';
import { dummyCardStart, dummyCardUnchanged, dummyCardCount } from '../../../common/testUil';
import { CardInfo } from '../../../common/types';

configure({ adapter: new Adapter() });

describe('DeckList', () => {

    test('mapStateToProps', () => {
      const mockDeckList = [dummyCardStart]
      const mockCounts = dummyCardCount
      const mockState: DeckListState = { deckList: mockDeckList, cardCount: mockCounts }

      expect(mapStateToProps(mockState))
        .toEqual({ deckList: [ dummyCardUnchanged ], cardCount: dummyCardCount })
    });

    test('empty decklist renders correctly', () => {
        const mockDeckList: CardInfo[] = []
        const mockCounts = {}
        const wrapper = shallow(<DeckList deckList={mockDeckList} cardCount={mockCounts} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('filled decklist renders correctly', () => {
        const mockMain = [dummyCardStart]
        const mockCounts = {}
        const wrapper = shallow(<DeckList deckList={mockMain} cardCount={mockCounts} />)

        expect(wrapper).toMatchSnapshot();
    });

    // TODO: refactor required
//     test('getCardInfo dispatches when button is clicked', () => {
//         const mockCounts = dummyCardCount
//         const mockMain = [dummyCardStart]
//         const onClickDispatch = jest.fn()
//         const wrapper = shallow<DeckList>(<DeckList deckList={mockMain} cardCount={mockCounts} dispatch={onClickDispatch} />)
//         const getCardInfoSpy = jest.spyOn(wrapper.instance(), 'getCardInfo')
//         // mount(<DeckList deckList={mockMain} cardCount={mockCounts} getCardInfo={onClickSpy} dispatch={onClickDispatch} />)

//         let container = wrapper.find("div")
//         let containerDeep = container.find("div")
//         let containerDeeper = containerDeep.find("div")
//         let containerButtonIncrement = containerDeeper.find("button").at(0)

//         expect(onClickDispatch).not.toHaveBeenCalled();
//         containerButtonIncrement.simulate('click');
//         expect(onClickDispatch).toHaveBeenCalled();

//         let containerButtonDecrement = containerDeeper.find("button").at(1)
        
//         onClickDispatch.mockClear();
//         expect(onClickDispatch).not.toHaveBeenCalled();
//         containerButtonDecrement.simulate('click');
//         expect(onClickDispatch).toHaveBeenCalled();

//         let containerButtonMaybe = containerDeeper.find("button").at(2)
        
//         onClickDispatch.mockClear();
//         expect(onClickDispatch).not.toHaveBeenCalled();
//         containerButtonMaybe.simulate('click');
//         expect(onClickDispatch).toHaveBeenCalled();
//     });
});

describe('organizeCards', () => {

  const mockCards = [
    { 
      artist: "",
      cmc: 2,
      color_identity: ["B"],
      colors: ["B"],
      image_uris: {
        small: "",
        normal: "",
        large: "",
        png: "",
        art_crop: "",
        border_crop: ""
      },
      mana_cost: "{1}{B}",
      name: "Cover of Darkness",
      oracle_text: "",
      power: undefined,
      rarity: "rare",
      reserved: false,
      setName: undefined,
      toughness: undefined,
      typeLine: ""
    }
  ]

  beforeEach(() => {
    mockCards[0].typeLine = ""
  })

  const testHelper = (result, typeline: string) => {
    Object.keys(result)
      .filter(key => key !== typeline)
      .forEach((key) => {
        expect(result[key]).toEqual([])
      })

    expect(result[typeline]).toHaveLength(1)
  }

  test('sorting creature card', () => {
    const testedTypeline = "creatures"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, testedTypeline)
  });

  test('sorting land card', () => {
    const testedTypeline = "lands"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)

    testHelper(result, testedTypeline)
  });

  test('sorting enchantment card', () => {
    const testedTypeline = "enchantments"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, testedTypeline)
  });

  test('sorting artifact card', () => {
    const testedTypeline = "artifacts"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, testedTypeline)
  });

  test('sorting planeswalker card', () => {
    const testedTypeline = "planeswalkers"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, testedTypeline)
  });

  test('sorting sorcery card', () => {
    const testedTypeline = "sorcery"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, "spells")
  });

  test('sorting instant card', () => {
    const testedTypeline = "instant"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, "spells")
  });

  test('sorting card with none of the specified categories', () => {
    const testedTypeline = "hgdfjdshgjfsh"
    mockCards[0].typeLine = testedTypeline

    let result = organizeCards(mockCards)
    
    testHelper(result, "other")
  });
});