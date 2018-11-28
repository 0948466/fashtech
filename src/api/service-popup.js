import { modal } from '@/api/constants'
import SubscribeByEmail from '@/components/SubscribeByEmail.vue'
import FashTech from '@/components/FashTech.vue'
import Democratization from '@/components/Democratization.vue'
import DataStoreBlockchain from '@/components/DataStoreBlockchain.vue'
import TrustProtocol from '@/components/TrustProtocol.vue'
import DirectAds from '@/components/DirectAds.vue'
import EquityAllocation from '@/components/EquityAllocation.vue'
import FeaturesFashtech from '@/components/FeaturesFashtech.vue'
import SecurityToken from '@/components/SecurityToken.vue'
import AllocationFunds from '@/components/AllocationFunds.vue'
import FashionIndustry from '@/components/FashionIndustry.vue'
import OnlineShoppers from '@/components/OnlineShoppers.vue'
import Business from '@/components/Business.vue'
import Developers from '@/components/Developers.vue'
import SliderImages from '@/components/SliderImages.vue'
import AdvisorProfile from '@/components/AdvisorProfile.vue'

export default class ServicePopup {
  static switchModal(route) {
    let view
    let classicView = true
    switch (route.query.modal.toLowerCase()) {
      case modal.SUBSCRIBE_BY_EMAIL:
        view = SubscribeByEmail
        break
      case modal.FASH_TECH:
        view = FashTech
        break
      case modal.DEMOCRATIZATION:
        view = Democratization
        break
      case modal.DATA_STORE_BLOCKCHAIN:
        view = DataStoreBlockchain
        break
      case modal.TRUST_PROTOCOL:
        view = TrustProtocol
        break
      case modal.DIRECT_ADS:
        view = DirectAds
        break
      case modal.EQUITY_ALLOCATION:
        view = EquityAllocation
        break
      case modal.FEATURES_FASHTECH:
        view = FeaturesFashtech
        break
      case modal.SECURITY_TOKEN:
        view = SecurityToken
        break
      case modal.ALLOCATION_FUNDS:
        view = AllocationFunds
        break
      case modal.FASHION_INDUSTRY:
        view = FashionIndustry
        break
      case modal.ONLINE_SHOPPERS:
        view = OnlineShoppers
        break
      case modal.BUSINESS:
        view = Business
        break
      case modal.DEVELOPERS:
        view = Developers
        break
      case modal.SLIDER_IMAGES:
        view = {
          render: h => h(SliderImages, {
            props: {
              setCurrentPage: route.params.sliderImagePage || 0,
            },
          }),
        }
        classicView = false
        break
      case modal.ADVISOR_PROFILE:
        view = {
          render: h => h(AdvisorProfile, {
            props: {
              id: route.query.name,
            },
          }),
        }
        break
      default:
        view = false
    }
    return { view, classicView }
  }
}
